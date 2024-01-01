import requests


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


def get_friend_requests(cookies):
    url = "http://localhost:3002/friend-requests/view"
    headers = {
        "Cookie": "; ".join(
            [f"{name}={value}" for name, value in cookies.items()]
        )
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        friend_requests = response.json()
        return friend_requests
    else:
        print(
            f"Failed to fetch friend requests with status code: {response.status_code}"
        )
        return None


def accept_friend_requests(cookies, friend_request_ids):
    url = "http://localhost:3002/friend-requests/accept"
    headers = {
        "Content-Type": "application/json",
        "Cookie": "; ".join(
            [f"{name}={value}" for name, value in cookies.items()]
        ),
    }

    for friend_request_id in friend_request_ids:
        payload = {"FriendRequestId": friend_request_id}

        response = requests.post(url, json=payload, headers=headers)

        if response.status_code == 200:
            print(f"Friend request {friend_request_id} accepted")
        else:
            print(
                f"Failed to accept friend request {friend_request_id} with status code: {response.status_code}"
            )


if __name__ == "__main__":
    username = input("Enter your username: ")
    user_cookies = login(username, "pass")

    if user_cookies:
        friend_requests = get_friend_requests(user_cookies)

        if friend_requests:
            friend_request_ids = [
                friend_request["_id"] for friend_request in friend_requests
            ]
            accept_friend_requests(user_cookies, friend_request_ids)
