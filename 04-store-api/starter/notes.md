# 132 - Express Async Errors

### Instead of using the ASYNC Wrapper that we ahd in the previous project here we are going to use some library "express-async-errors"

#

#

# 134 - Populate.js

### the file is to be run without server being on to populate raw data

### if the server is already running we can comment out "await connectDB(process.env.MONGO_URI);" and just run node populate to populate the raw data

#

#

# 138 - Query object

### so if we request with some prop that is not in the schema then as per the lesson mongo db sends empty array but as of the latest versions we will not recive empty array and mongo db will ignore the invalid props.

#

#

# 140 - Mongo db query

### https://www.mongodb.com/docs/manual/reference/operator/query/
