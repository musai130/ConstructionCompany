from playhouse.sqlite_ext import PostgresqlDatabase

db = PostgresqlDatabase(
    database='ConstructionCompany_db', 
    user='postgres', 
    password='root',      
    host='127.0.0.1', 
    port=5432
)