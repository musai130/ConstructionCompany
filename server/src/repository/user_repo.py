from dto import UserDTO
from src.models.user_model import UserModel


class UserRepo:
    def __init__(
            self, 
            user_model: UserModel, 
            user_dto: UserDTO
        ) -> None:

        self.user_model: UserModel = user_model
        self.user_dto: UserDTO = user_dto

    def get_user(
            self,
            user_id: int
    ):
        user_item = self.user_model.get(
                user_id=user_id
            )
        return UserDTO(
            user_id=user_item.user_id,
            name=user_item.name,
        )
    def add_user(
        self, 
        name: str, 
    ):
        return self.user_model.insert(
            name=name,
        ).execute()