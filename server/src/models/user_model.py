import peewee

from src.models.db_connection import db

class UserModel(peewee.Model):
    user_id = peewee.PrimaryKeyField(
        db_column="user_id",
    )
    name = peewee.CharField(
        max_length=1000,
        null=False,
    )

    class Meta:
        database = db
        db_table = "user"


UserModel.create_table()