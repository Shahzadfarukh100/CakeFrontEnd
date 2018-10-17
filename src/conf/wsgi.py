from dotenv import load_dotenv

from django.core.wsgi import get_wsgi_application

load_dotenv('../.env')

application = get_wsgi_application()
