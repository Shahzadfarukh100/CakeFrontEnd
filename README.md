# Django Project Boilerplate

#### Requirements
Python 3.6.5 (create a virtual environment)  
Postgresql (latest version)  
Git (latest version)

#### Cloning
Clone project using  
`$ git clone https://github.com/Shahzadfarukh100/ProjectBP.git`


#### Project structure

```
ProjectBP (rename this dir as your project name)
│   README.md (main readme file)
│   .gitignore (gitignore file)
│   requirements.txt (requirements file)
└───src (all the source code is here) 
│   │   
│   │   manage.py
|   |   .env.example (environment variables file)
|   └───core (main application) 
│   └───conf (project configuration) 
│   └───static (static files)
|   └───templates (templates dir)
│   
|   (add more project related folders here like test_data and docs )

```

#### Installation Instructions
1. Create and activate virtual environment
2. Install Postgresql and create a database
3. cd to project root and install requirements using `$ pip install -r requirements.txt`
4. cd to `src` dir.
5. Make a copy of `.env.example` file naming `.env` (`$ cp .env.example .env`)
6. Edit variables in `.env` file
7. Apply migrations using `$ python manage.py migrate`
8. Run server using `python manage.py runserver`
9. Visit `127.0.0.1:8000` in browser.
9. Start writing code in `core` app.
