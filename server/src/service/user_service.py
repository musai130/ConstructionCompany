from src.repository.user_repo import UserRepo


class UserService:
    def __init__(self, user_repo: UserRepo):
        self.user_repo = user_repo
    def get_user(self, user_id):
        return self.user_repo.get_user(user_id)
    
    def add_user(
        self, 
        name: str, 
        ):
        return self.user_repo.add_user(name)