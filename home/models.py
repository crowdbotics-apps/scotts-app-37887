from django.conf import settings
from django.db import models
class Service_Category(models.Model):
    'Generated Model'
    category_id = models.CharField(max_length=256,)
    category_description = models.TextField()
    category_name = models.BinaryField(null=True,blank=True,)
class Vendors(models.Model):
    'Generated Model'
    vendor_id = models.BigIntegerField()
    vendor_name = models.TextField()
    vendor_revenue = models.BigIntegerField()
    vendor_url = models.URLField()
    vendor_category_id = models.BigIntegerField()
class Users(models.Model):
    'Generated Model'
    userid = models.BigIntegerField()
    first_name = models.TextField()
    last_name = models.TextField()
    type = models.BinaryField()
    email = models.EmailField(max_length=254,)
    organization_id = models.BigIntegerField()
class Providers(models.Model):
    'Generated Model'
    provider_id = models.BigIntegerField()
    provider_name = models.BigIntegerField()
    provider_state = models.BigIntegerField()
    provider_city = models.BigIntegerField()
    provider_location_count = models.BigIntegerField()
    provider_type = models.BinaryField(null=True,blank=True,)
class Reviews(models.Model):
    'Generated Model'
    review_id = models.BigIntegerField()
    review_category = models.OneToOneField("home.Service_Category",on_delete=models.PROTECT,related_name="reviews_review_category",)
    review_category_score = models.BigIntegerField()
    vendor_id = models.OneToOneField("home.Vendors",on_delete=models.CASCADE,null=True,blank=True,related_name="reviews_vendor_id",)
    reviewer_type = models.ManyToManyField("home.Users",blank=True,related_name="reviews_reviewer_type",)
    provider_id = models.OneToOneField("home.Providers",on_delete=models.CASCADE,null=True,blank=True,related_name="reviews_provider_id",)
