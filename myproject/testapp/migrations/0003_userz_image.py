# Generated by Django 2.2.6 on 2020-05-20 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0002_postz'),
    ]

    operations = [
        migrations.AddField(
            model_name='userz',
            name='image',
            field=models.TextField(default=' '),
        ),
    ]