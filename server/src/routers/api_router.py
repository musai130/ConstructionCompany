from fastapi import APIRouter, Depends

from depends import get_user_service
from src.service.user_service import UserService


api_router = APIRouter(
    prefix="/api", 
    tags=["api"]
)


@api_router.get("/get_user")
def get_user(
    user_id: int,
    user_service: UserService = Depends(get_user_service)
):
    return user_service.get_user(user_id)

@api_router.post("/add_user")
def add_menu_item(
    name: str,
    user_service: UserService = Depends(get_user_service),
):
    return user_service.add_user(name)
