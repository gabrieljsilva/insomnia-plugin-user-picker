This plugin aims to solve a frequent problem for developers when testing their APIs: switching between different user profiles. With the User Picker, you can keep a list of users and switch between them easily.

## Creating your first login entry
Click the Document dropdown menu.

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-1.png)

Then click on the "Add user" button:

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-2.png)

and then add the form data.

- name: It is the user name that will appear in the menu;
- identifier: It is any identifier that will be used as a credential (E-mail, or username);
- password: It is the user's password;

After that the username will be available in the list

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-3.png)

## Getting user data
You can access the document menu and click on any user that you have created. The selected user will have a "check" icon.

To access the data of the selected user, you can use some template tags from the plugin, which are:

Current user name: The name of the selected user;
Current user identifier: The identifier of the selected user;
Current user password: The password of the selected user;

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-4.png)

## Deleting a user
You can delete a user by clicking on the Document menu again and then on "Delete User".

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-5.png)

After that, a modal will appear with a list of identifiers. Just double-click on the "x" icon next to the user you want to delete and click on "finish".

![Dropdown menu](https://raw.githubusercontent.com/gabrieljsilva/insomnia-plugin-user-picker/master/src/assets/screenshot-6.png)
