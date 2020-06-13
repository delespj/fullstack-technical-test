# fullstack-technical-test
You have 2 choices for using this project :

## 🐳 Docker
You have to install docker and docker-compose then run the following command :
```bash
docker-compose up
```
It will install all dependencies and launch both application (Backend and Frontend)


## Manuel launch
Without using docker :
## 🔧 Prerequisites
- Python
- [poetry](https://python-poetry.org/) python package manager
- [yarn](https://yarnpkg.com/) node package manager


## 🚀 Quick start
### Backend
  ⚠️ Ensure to be inside the `backend/` directory
- Install python dependencies :
  ```bash
  poetry install
  ```
- Enter the virtualenv :
  ```bash
  poetry shell
  ```
- Start the development server :
  ```bash
  python manage.py runserver
  ```

### Frontend
  ⚠️ Ensure to be inside the `frontend/list_of_movies/` directory
- Install dependencies :
  ```bash
  yarn install
  ```
- Start the development server :
  ```bash
  yarn serve
  ```
  
  ## Usefull precisions & tools
  ### Backend
  When the application is running you would find :
  -a database manager at : http://localhost:8000/admin (with credentials : admin, admin)
  -a Graphql API UI tester at : http://localhost:8000/graphql/ (Where you could query your API) -> This is the same adress that front use for calling it
  
  Graphql routes are declared in file : backend/list_of_movies/schema.py
  
  ### Frontend
  The entrypoint of all components of the application is located at frontend/list_of_movies/src/App.vue
  
  GLHF!
