from django.conf import settings
from django.db import models
class Providers(models.Model):
    'Generated Model'
    provider_id = models.BigIntegerField()
    provider_name = models.BigIntegerField()
    provider_state = models.BigIntegerField()
    provider_city = models.BigIntegerField()
    provider_location_count = models.BigIntegerField()
    provider_type = models.BinaryField(null=True,blank=True,)
