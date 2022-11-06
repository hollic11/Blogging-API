# Blog App
This is a bloggin API

---

## Requirements
1. User should be able to register 
2. User should be able to login with Passport using JWT
3. Implement basic auth
4. Users should be able to create blog
5. Users should be able to update and delete blogs
6. Test application

---

## Setup
- Install NodeJS, mongodb
- create blogging API folder and other subfolders
- run `npm init`
- install dependencies

---

### User
| field  |  data_type | constraints  |
|---|---|---|
|  firstname | string  |  required|
|  lastname  |  string |  required |
|  email     | string  |  required |
|  password |   string |  required  |
|  user_type |  string |  required, default: user, enum: ['user', 'admin'] |


### Blog
| field  |  data_type | constraints  |
|---|---|---|
|  title |  string |  required |
|  author |  string |  required |
|  description |  string |  required |
|  tags | array  |  required |
|  created_at |  date |  required |
|  state | string |  required,default:draft|
|  read_count  |  number | default:0  |
|  reading_time  |  number |

## Contributor
- Elijah Odetokun