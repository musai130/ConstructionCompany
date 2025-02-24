from typing import List
import pydantic

class UserDTO(pydantic.BaseModel):
    name: str

    