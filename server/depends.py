


from dto import UserDTO
from src.models.user_model import UserModel
from src.repository.user_repo import UserRepo
from src.service.user_service import UserService


user_repo = UserRepo(UserModel, UserDTO)
user_sevice = UserService(user_repo)

def get_user_service():
    return user_sevice
