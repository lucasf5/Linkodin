const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' , openapi: '3.0.0' }); 

swaggerAutogen('./swagger-admin.json', ['./src/app/routes/adminRoutes.js']);
swaggerAutogen('./swagger-user.json', ['./src/app/routes/userRoutes.js']);
swaggerAutogen('./swagger-recruiter.json', ['./src/app/routes/recruiterRoutes.js']);
swaggerAutogen('./swagger-candidate.json', ['./src/app/routes/candidateRoutes.js']);