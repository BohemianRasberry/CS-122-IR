from django.contrib import admin
from django.urls import path, reverse_lazy
from library import views
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as auth_views

app_name='library'

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.books, name='books'),
    path('books/(<book_isbn>\w+)/', views.book, name='book'),
    path('books/(<book_isbn>\w+)/addcomment/', views.addcomment, name='addcomment'),
    path('signin/', LoginView.as_view(template_name = 'signin.html'), name='signin'),
    path('signup/', views.signup, name='signup'),
    path('signout/', views.signout, name='signout'),
    path('profile/', views.profile, name='profile'),
    path('profile/profile_edit/', views.profile_edit, name='profile_edit'),
    path('profile/password_edit/', auth_views.PasswordChangeView.as_view(template_name ='password_edit.html'),name='password_edit'),
    path('password-change/', auth_views.PasswordChangeView.as_view(success_url=reverse_lazy('lms:password_change_done')), name='password_change'), 

    path('loans/', views.loans, name='loans'),
    path('comments/', views.comments, name='comments'),

    path('deletecomment/(<comment_comno>\d+)/', views.deletecomment, name='deletecomment'),

    path('loan/(<storage_stono>\d+)/', views.loan, name='loan'),
    path('return/(<loan_loanno>\d+)/', views.return_book, name='return_book'),

    path('addbook/', views.addbook, name='addbook'),
    path('deletebook/(<storage_stono>\d+)/', views.deletebook, name='deletebook'),

    path('loans/renew/(<loan_loanno>\d+)/', views.renew, name='renew'),
    path('reserves/', views.reserves, name='reserves'),
    path('reserves/(<storage_stono>\d+)/', views.reservebook, name='reservebook'),
    path('reserves/(<reserve_reno>\d+)/confirm/', views.confirmreserve, name='confirmreserve'),
]
