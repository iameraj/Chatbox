import requests
import random


def get_user_list():
    url = "http://localhost:3002/everyone"
    response = requests.get(url)

    if response.status_code == 200:
        user_list = response.json()
        return user_list
    else:
        print(
            f"Failed to fetch user list with status code: {response.status_code}"
        )
        return None


def login(username, password):
    url = "http://localhost:3002/auth/login"
    payload = {"username": username, "password": password}
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        print(f"Login as {username} successful")
        return response.cookies
    else:
        print(f"Login failed with status code: {response.status_code}")
        return None


def send_friend_request(cookies, friend_id):
    url = "http://localhost:3002/friend-requests/send"
    payload = {"friendId": friend_id}
    headers = {
        "Content-Type": "application/json",
        "Cookie": "; ".join(
            [f"{name}={value}" for name, value in cookies.items()]
        ),
    }

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        print(f"\nFriend request sent to {friend_id}")
    else:
        print(
            f"Failed to send friend request with status code: {response.status_code}"
        )


if __name__ == "__main__":
    # Input the target username
    target_username = input("Enter the target username: ")
    num_requests = int(input("Enter the number of requests: "))

    # Get the user list
    user_list = get_user_list()

    for _ in range(num_requests):
        user_list = get_user_list()

        if not user_list:
            pass

        target_user = next(
            (
                user
                for user in user_list
                if user["username"] == target_username
            ),
            None,
        )

        if not target_user:
            print(
                f"User with username {target_username} not found in the user list."
            )

        target_user_id = target_user["_id"]
        random_user = random.choice(
            [user for user in user_list if user["_id"] != target_user_id]
        )
        random_user_cookies = login(random_user["username"], "pass")

        if random_user_cookies:
            send_friend_request(random_user_cookies, target_user_id)
