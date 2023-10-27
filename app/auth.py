"""
Authentication views and logic
"""

from flask_login import current_user, login_user, logout_user
from flask import Blueprint, flash, request, url_for, redirect, render_template
from werkzeug.security import generate_password_hash, check_password_hash
from . import Session
from .models import User

auth = Blueprint('auth', __name__)

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        first_name = request.form.get('firstName')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists', category='error')
        elif len(email) < 8:
            flash('please enter valid email', category='error')
        elif len(email) < 2:
            flash('please enter valid name', category='error')
        elif len(password) < 6:
            flash('password too short', category='error')
        elif password1 != password2:
            flash('passwords dont match', category='error')
        else:
            session = Session()
            new_user = user(email=email, first_name=first_name, password=generate_password_hash(password1, method='sha256'))
            session.add(new_user)
            session.commit()
            session.close()
            login_user(new_user, remember=True)
            flash('Accout successfully created', category='success')
            return redirect(url_for('views.home'))
    return render_template('sign-up.html', user=current_user)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            if  check_password_hash(user.password, password):
                flash('login successful', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('incorrect password', category='error')
        else:
            flash('please create an accout to login', category='error')
        return render_template('login.html', user=current_user)
                

@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
