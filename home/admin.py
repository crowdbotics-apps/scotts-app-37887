from django.contrib import admin
from .models import Providers,Reviews,Service_Category,Users,Vendors
admin.site.register(Service_Category)
admin.site.register(Vendors)
admin.site.register(Users)
admin.site.register(Providers)
admin.site.register(Reviews)

# Register your models here.
