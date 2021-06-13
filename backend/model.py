#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    description: str