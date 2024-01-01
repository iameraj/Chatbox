import requests
from faker import Faker


def create_dummy_accounts(num_requests):
    fake = Faker()

    url = "http://localhost:3002/auth/signup"
    headers = {"Content-Type": "application/json"}

    for _ in range(num_requests):
        username = fake.user_name()
        email = fake.email()
        payload = {"username": username, "password": "pass", "email": email}

        response = requests.post(url, json=payload, headers=headers)

        print(f"Username: {username}, Email: {email}")
        print(f"Response Status: {response.status_code}")


if __name__ == "__main__":
    num_requests = int(input("Enter the number of dummy accounts to create: "))
    create_dummy_accounts(num_requests)
