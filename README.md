# onboarding-backend

# todo

    Readme
    Gom cục try catch
    Builder
    Middleware

# using node 19.9.0

# run

npm install (if needed)

npm run dev: run and watch
npm run prod: run normally

using sequelize to migrate model from code to DB

# Create model

create new model in ./models

# Update model to DB:

sequelize db:migrate

# Undo the last migration

sequelize db:migrate:undo

# Undo all migration

sequelize db:migrate:undo:all

# See more info at:

[https://sequelize.org/docs/v7/models/defining-models/](Sequelize)
