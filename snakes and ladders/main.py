import random

# Define the snakes and ladders
snakes = {16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}
ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}

# Roll the dice
def roll_dice():
    return random.randint(1, 6)

# Check for snakes and ladders
def check_snakes_and_ladders(position):
    if position in snakes:
        print(f"Oops, you got bit by a snake! Go back to {snakes[position]}")
        return snakes[position]
    elif position in ladders:
        print(f"Great! You found a ladder! Climb up to {ladders[position]}")
        return ladders[position]
    else:
        return position

# Play the game
def play_snakes_and_ladders():
    position = 0
    while position < 100:
        input("Press enter to roll the dice...")
        dice = roll_dice()
        print(f"You rolled a {dice}")
        position += dice
        if position > 100:
            position -= dice
            print("Try again. You need to roll the exact number to reach 100.")
        else:
            position = check_snakes_and_ladders(position)
            print(f"Your current position is {position}")

    print("Congratulations! You won!")

# Play the game
play_snakes_and_ladders()
