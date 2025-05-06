# User is already logged out

```json
{
  "message": "User (role: guests) missing scope (account)",
  "code": 401,
  "type": "general_unauthorized_scope",
  "version": "1.6.2"
}
```

# User given wrong password and email

```json
{
  "message": "Invalid credentials. Please check the email and password.",
  "code": 401,
  "type": "user_invalid_credentials",
  "version": "1.6.2"
}
```

# User login successful

```json
{
  "$id": "681649e0b96bb3cb83b3",
  "$createdAt": "2025-05-03T16:52:48.766+00:00",
  "$updatedAt": "2025-05-03T16:52:48.766+00:00",
  "userId": "680f4b030035eb7fad17",
  "expire": "2026-05-03T16:52:48.759+00:00",
  "provider": "email",
  "providerUid": "abhi.kshirsagar1100@gmail.com",
  "providerAccessToken": "",
  "providerAccessTokenExpiry": "",
  "providerRefreshToken": "",
  "ip": "134.238.17.163",
  "osCode": "",
  "osName": "",
  "osVersion": "",
  "clientType": "library",
  "clientCode": "",
  "clientName": "Postman Desktop",
  "clientVersion": "7.39",
  "clientEngine": "",
  "clientEngineVersion": "",
  "deviceName": "",
  "deviceBrand": "",
  "deviceModel": "",
  "countryCode": "in",
  "countryName": "India",
  "current": true,
  "factors": ["password"],
  "secret": "",
  "mfaUpdatedAt": ""
}
```

# User is already logged in

```json
{
  "message": "Creation of a session is prohibited when a session is active.",
  "code": 401,
  "type": "user_session_already_exists",
  "version": "1.6.2"
}
```

# User logout

```text
No Response
```

# Current user not found

```json
{
  "message": "User (role: guests) missing scope (account)",
  "code": 401,
  "type": "general_unauthorized_scope",
  "version": "1.6.2"
}
```

# Current user found

```json
{
  "$id": "680f4b030035eb7fad17",
  "$createdAt": "2025-04-28T09:31:48.342+00:00",
  "$updatedAt": "2025-05-03T16:44:35.206+00:00",
  "name": "Abhishek Kshirsagar",
  "registration": "2025-04-28T09:31:48.341+00:00",
  "status": true,
  "labels": [],
  "passwordUpdate": "2025-05-03T16:43:50.740+00:00",
  "email": "abhi.kshirsagar1100@gmail.com",
  "phone": "+919766007380",
  "emailVerification": false,
  "phoneVerification": false,
  "mfa": false,
  "prefs": {},
  "targets": [
    {
      "$id": "680f4b045ed6dc8eb875",
      "$createdAt": "2025-04-28T09:31:48.388+00:00",
      "$updatedAt": "2025-04-28T09:31:48.388+00:00",
      "name": "",
      "userId": "680f4b030035eb7fad17",
      "providerId": null,
      "providerType": "email",
      "identifier": "abhi.kshirsagar1100@gmail.com",
      "expired": false
    },
    {
      "$id": "680f4b0461b109cf8990",
      "$createdAt": "2025-04-28T09:31:48.400+00:00",
      "$updatedAt": "2025-04-28T09:31:48.400+00:00",
      "name": "",
      "userId": "680f4b030035eb7fad17",
      "providerId": null,
      "providerType": "sms",
      "identifier": "+919766007380",
      "expired": false
    }
  ],
  "accessedAt": "2025-05-03T16:44:35.203+00:00"
}
```

# Reset password user not found

```json
{
  "message": "User with the requested ID could not be found.",
  "code": 404,
  "type": "user_not_found",
  "version": "1.6.2"
}
```

# Reset password user found

```json
{
  "$id": "68164f6e5c6db9d0f885",
  "$createdAt": "2025-05-03T17:16:30.379+00:00",
  "userId": "680f4b030035eb7fad17",
  "secret": "",
  "expire": "2025-05-03T18:16:30.378+00:00",
  "phrase": ""
}
```

# Limit exceed

```json
{
  "message": "Rate limit for the current endpoint has been exceeded. Please try again after some time.",
  "code": 429,
  "type": "general_rate_limit_exceeded",
  "version": "1.6.2"
}
```

# User already exist

```json
{
  "message": "A user with the same id, email, or phone already exists in this project.",
  "code": 409,
  "type": "user_already_exists",
  "version": "1.6.2"
}
```

# Create user

```json
{
  "$id": "appwrite0001",
  "$createdAt": "2025-05-03T18:00:06.832+00:00",
  "$updatedAt": "2025-05-03T18:00:06.832+00:00",
  "name": "Rebal Rajesh",
  "registration": "2025-05-03T18:00:06.831+00:00",
  "status": true,
  "labels": [],
  "passwordUpdate": "2025-05-03T18:00:06.831+00:00",
  "email": "rajeshprabhakarejjagani@gmail.com",
  "phone": "",
  "emailVerification": false,
  "phoneVerification": false,
  "mfa": false,
  "prefs": {},
  "targets": [
    {
      "$id": "681659a6d36c5afaa3cd",
      "$createdAt": "2025-05-03T18:00:06.865+00:00",
      "$updatedAt": "2025-05-03T18:00:06.865+00:00",
      "name": "",
      "userId": "appwrite0001",
      "providerId": null,
      "providerType": "email",
      "identifier": "rajeshprabhakarejjagani@gmail.com",
      "expired": false
    }
  ],
  "accessedAt": "2025-05-03T18:00:06.831+00:00"
}
```

# Password reset successful

```json
{
  "$id": "68165a3ea4eb5dcb4fe6",
  "$createdAt": "2025-05-03T18:02:38.676+00:00",
  "userId": "appwrite0001",
  "secret": "",
  "expire": "2025-05-03T19:02:38.675+00:00",
  "phrase": ""
}
```
