# Generated by Django 2.2.28 on 2022-12-19 20:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_providers_reviews_service_category_users_vendors'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Reviews',
        ),
        migrations.DeleteModel(
            name='Service_Category',
        ),
        migrations.DeleteModel(
            name='Users',
        ),
        migrations.DeleteModel(
            name='Vendors',
        ),
    ]
