"""
Authentication views and logic
"""

from flask import Blueprint
from flask import Flask

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "login"
