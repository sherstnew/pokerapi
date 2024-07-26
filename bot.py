import os
import asyncio
import logging
import sys
import sqlite3
from dotenv import load_dotenv

from aiogram import Bot, Dispatcher, F
from aiogram.utils.keyboard import InlineKeyboardBuilder
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardButton, CallbackQuery

load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")
write = False
user = None
move = None

dp = Dispatcher()
connection = sqlite3.connect('PokerStatistics.db')
cursor = connection.cursor()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    builder = InlineKeyboardBuilder()
    builder.add(InlineKeyboardButton(
        text="Ввести данные✍🏻",
        callback_data="input_data")
    )
    builder.add(InlineKeyboardButton(
        text="Просмотреть данныеℹ️",
        callback_data="check_data")
    )
    await message.answer(
        "-------------------------------------------------------------------\n                              Привет!\n  "
        "     ♣      ️          Я ПокерБот!               ♣ ️\n                   Выбери, что ты хочешь \n-------------"
        "------------------------------------------------------",
        reply_markup=builder.as_markup())


@dp.message(Command("input"))
async def input_data(message: Message):
    cursor.execute('SELECT Id, Name FROM Stats')
    players = cursor.fetchall()

    builder = InlineKeyboardBuilder()
    for i in players:
        builder.row(InlineKeyboardButton(
            text=f"{i[1]}",
            callback_data=f"write_data-{i[0]}")
        )
    await message.answer(
        "-------------------------------------------------------------------\n♦️ Изменить статистику Игроков ♦️"
        "\n-------------------------------------------------------------------",
        reply_markup=builder.as_markup()
    )


@dp.message(Command("check"))
async def check_data(message: Message):
    cursor.execute('SELECT Id, Name FROM Stats')
    players = cursor.fetchall()

    builder = InlineKeyboardBuilder()
    for i in players:
        builder.row(InlineKeyboardButton(
            text=f"{i[1]}",
            callback_data=f"open_stats-{i[0]}")
        )
    builder.row(InlineKeyboardButton(
        text="Общая Статистика",
        callback_data="general_statistics")
    )
    await message.answer(
        "-------------------------------------------------------------------\n♠️ Посмотреть статистику Игроков ♠️\n----"
        "---------------------------------------------------------------",
        reply_markup=builder.as_markup()
    )


@dp.message(Command("secret"))
async def secret(message: Message):
    await message.answer("卐卐卐 Посхалка | Медный бычок | 1488 | Включаем вентиляторы! 卐卐卐")


@dp.message(Command("help"))
async def help(message: Message):
    await message.answer("""
    /start   \\-\\-\\>   Для начала диалога с ботом\n Ранги:
    \n \\-♾ \\< Бронза < 100\n 100 ≤ Серебро \\< 600\n 600 ≤ Золото \\< 1250\n 1250 ≤ Алмаз \\< 2500\n 2500 ≤ Рубин \\< 3500 \n 3500 ≤ Платина \\< \\+♾
    \n\nЗачем нужны ранги? \\- Это ваш Статус, чем вы выше \\- тем вы престижнее\n\nВсе начинают со стартовым капиталом в 640 фишек\\!
      \n/secret \\- секрет\nЧто ты сюда вообще зашел???Дедукцию включать надо было\\!\\!\\!""",
                         parse_mode='MarkDownV2')


@dp.message(Command("stats"))
async def stats(message: Message, current_player):
    cursor.execute(f'SELECT * FROM Stats Where Id == {current_player}')
    player = cursor.fetchall()
    rank = None

    if player[0][4] < 100:
        rank = 'Бронза'
    elif 100 <= player[0][4] < 600:
        rank = 'Серебро'
    elif 600 <= player[0][4] < 1250:
        rank = 'Золото'
    elif 1250 <= player[0][4] < 2500:
        rank = 'Алмаз'
    elif 2500 <= player[0][4] < 3500:
        rank = 'Рубин'
    elif 3500 <= player[0][4]:
        rank = 'Платина'

    await message.answer(
        f'<pre>ID| Имя | Фишки | Победы | Очки | Долг | Ранг\n\n{player[0][0]} | {player[0][1].split(" ")[0]} |'
        f' {player[0][2]} | {player[0][3]} | {player[0][4]} | {player[0][5]} | {rank[:3]}</pre>', parse_mode='html')


@dp.message(Command("action"))
async def action(message: Message, current_player, amount):
    global move, user
    if move == 'Долг':
        move = 'Debt'
    elif move == 'Фишки':
        move = 'Chips'
    cursor.execute(f'SELECT {move} FROM Stats Where Id == {current_player}')
    users = cursor.fetchall()
    cursor.execute(f'UPDATE Stats SET {move} == {amount + users[0][0]} WHERE Id == {current_player}')
    cursor.execute(f'Select * FROM Stats Where Id == {current_player}')
    numbers = cursor.fetchone()
    cursor.execute(f'UPDATE Stats SET Points == {round(0.7 * numbers[2] + 0.3 * numbers[3] - numbers[5] * 0.9)}'
                   f' WHERE Id == {current_player}')
    connection.commit()
    move, user = None, None
    await message.answer('Изменение успешно сохранено!', parse_mode='html')
    await command_start_handler(message)


@dp.message(Command("param"))
async def param(message: Message, current_player):
    global user
    user = current_player
    builder = InlineKeyboardBuilder()
    builder.row(InlineKeyboardButton(
        text="Фишки",
        callback_data="chips"))
    builder.row(InlineKeyboardButton(
        text="Победа",
        callback_data="victories"))
    builder.row(InlineKeyboardButton(
        text="Долг",
        callback_data="debt"))
    await message.answer(
        "-------------------------------------------------------------------\n♥️ Выберите параметр Игрока ♥️"
        "\n-------------------------------------------------------------------",
        reply_markup=builder.as_markup()
    )


@dp.message()
async def message_filter(message: Message) -> None:
    global write, user
    if write:
        try:
            number = int(message.text)
            write = False
            await action(message, user, number)
        except Exception:
            await message.answer(f"Введено некорректное число, повторите попытку")
    else:
        await message.answer(f"Неизвестная команда! /help")


async def main() -> None:
    bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
    await dp.start_polling(bot)


@dp.callback_query(F.data == "check_data")
async def check_data_value(callback: CallbackQuery):
    await check_data(callback.message)
    await callback.answer()


@dp.callback_query(F.data == "input_data")
async def input_data_value(callback: CallbackQuery):
    await input_data(callback.message)
    await callback.answer()


@dp.callback_query(F.data == "general_statistics")
async def general_statistics_value(callback: CallbackQuery):
    cursor.execute('SELECT * FROM Stats')
    players = cursor.fetchall()
    answer = '<pre>ID| Имя | Фишки | Победы | Очки | Долг | Ранг\n\n'
    players = sorted(players, key=lambda x: x[-2], reverse=True)

    chips_space = max([len(str(i[2])) for i in players])
    win_space = max([len(str(i[3])) for i in players])
    score_space = max([len(str(i[4])) for i in players])
    debt_space = max([len(str(i[5])) for i in players])
    name_space = max([len(i[1].split(" ")[0]) for i in players])

    for Id, name, chips, victories, points, debt in players:
        rank = None

        if points < 100:
            rank = 'Бронза'
        elif 100 <= points < 600:
            rank = 'Серебро'
        elif 600 <= points < 1250:
            rank = 'Золото'
        elif 1250 <= points < 2500:
            rank = 'Алмаз'
        elif 2500 <= points < 3500:
            rank = 'Рубин'
        elif 3500 <= points:
            rank = 'Платина'

        answer += f'{Id} | {name.split(" ")[0] + (name_space - len(name.split(" ")[0])) * " "} | {chips}' \
                  f'{(chips_space - len(str(chips))) * " "} | {victories}{(win_space - len(str(victories))) * " "} |' \
                  f' {points}{(score_space - len(str(points))) * " "} | {debt}{(debt_space - len(str(debt))) * " "} |' \
                  f' {rank[:3]}\n'
    answer += '</pre>'
    await callback.message.answer(f"{answer.rstrip()}", parse_mode='html')
    await callback.answer()


@dp.callback_query(F.data.startswith("open_stats"))
async def statistics_value(callback: CallbackQuery):
    await stats(callback.message, int(callback.data.split('-')[1]))
    await callback.answer()


@dp.callback_query(F.data.startswith("write_data"))
async def statistics_write(callback: CallbackQuery):
    await param(callback.message, int(callback.data.split('-')[1]))
    await callback.answer()

@dp.callback_query(F.data == "debt")
async def debt(callback: CallbackQuery):
    global move, write
    move = 'Долг'
    write = True
    cursor.execute(f'SELECT Name FROM Stats Where Id == {user}')
    users = cursor.fetchone()
    await callback.message.answer(f'Игрок и параметр выбраны, введите число\nИгрок: {users[0]}, Параметр: {move}')
    await callback.message.delete()
    await callback.answer()


@dp.callback_query(F.data == "victories")
async def victories(callback: CallbackQuery):
    global move, user
    cursor.execute(f'SELECT Victories FROM Stats Where Id == {user}')
    users = cursor.fetchall()
    cursor.execute(f'UPDATE Stats SET Victories == {1 + users[0][0]} WHERE Id == {user}')
    cursor.execute(f'Select * FROM Stats Where Id == {user}')
    numbers = cursor.fetchone()
    cursor.execute(f'UPDATE Stats SET Points == {round(0.7 * numbers[2] + 0.3 * numbers[3] - numbers[5] * 0.9)}'
                   f' WHERE Id == {user}')
    connection.commit()
    cursor.execute(f'SELECT Name FROM Stats Where Id == {user}')
    users = cursor.fetchone()
    await callback.message.answer(f'Изменение успешно сохранено!\n{users[0]} получил +1 победу')
    move, user = None, None
    await callback.message.delete()
    await callback.answer()


@dp.callback_query(F.data == "chips")
async def chips(callback: CallbackQuery):
    global move, write
    write = True
    move = 'Фишки'
    cursor.execute(f'SELECT Name FROM Stats Where Id == {user}')
    users = cursor.fetchone()
    await callback.message.answer(f'Игрок и параметр выбраны, введите число\nИгрок:  {users[0]},   Параметр:  {move}')
    await callback.message.delete()
    await callback.answer()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())
