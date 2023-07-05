#!/bin/bash

sudo docker compose -p mi-proyecto up --build

sudo docker exec app-app-1 sh -c "npx prisma migrate reset & npx prisma migrate dev --name create-users-table"



