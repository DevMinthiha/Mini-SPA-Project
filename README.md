# Project Title

Contact api from MMS-IT


## API Reference

#### Login

  Post https://contact-app.mms-it.com/api/v1/login

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| email | string | *Required* admin@gmail.com |
| password | string | *Required* admin123 |


#### Register

  Post https://contact-app.mms-it.com/api/v1/register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | string | *Required* example |
| email | string | *Required* example@gmail.com |
| password | string | *Required* asdffdsa |
| password_confirmation | string | *Required* asdffdsa |




### Get Contacts

  Get https://contact-app.mms-it.com/api/v1/contact


### Get Single Contact

  GEt https://contact-app.mms-it.com/api/v1/contact/{id}

### Create Contact

  POST https://contact-app.mms-it.com/api/v1/contact

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | string | *Required* Post Malone |
| phone | integer | *Required* 095146124 |
| email | string | *Nullable* post@gmail.com |
| address | string | *Nullable* NewYork |

### Update Contact

  Put https://contact-app.mms-it.com/api/v1/contact/{id}
  #### You can update with only singe Parameter or more
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | string | *Required* Post Malone |
| phone | integer | *Required* 095146124 |
| email | string | *Nullable* post@gmail.com |
| address | string | *Nullable* NewYork |

### Delete Contact

  Delete https://contact-app.mms-it.com/api/v1/contact/{id}






### Get Profile

  Get https://contact-app.mms-it.com/api/v1/user-profile


### Get User devices

  GEt https://contact-app.mms-it.com/api/v1/user-devices

### Change Password

  POST https://contact-app.mms-it.com/api/v1/change-password

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| current_password | string | *Required* admin123 |
| password | string | *Required* asdffdsa |
| password_confirmation | string | *Required* asdffdsa |

### Logout

  POST https://contact-app.mms-it.com/api/v1/user-logout
