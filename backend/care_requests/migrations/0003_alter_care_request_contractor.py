# Generated by Django 4.1.7 on 2023-03-08 22:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('care_requests', '0002_rename_client_id_care_request_client_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='care_request',
            name='contractor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='contractor', to=settings.AUTH_USER_MODEL),
        ),
    ]
