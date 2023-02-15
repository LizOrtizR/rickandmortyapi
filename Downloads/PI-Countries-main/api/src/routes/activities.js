const { Router } = require('express'); 
// const { postActivities } = require('../')
const { activityModel, countryModel } = require('../db'); 
 
// POST | /activities**
//GET | /activities**
const router = Router(); 


router.get('/activities', (req, res) => {
    // Obtener todas las actividades 
    const activities = database.getActivities();
    
    // Devolver una respuesta con los datos de las actividades
    res.status(200).json(activities);
});

router.post('/activities', (req, res) => {
    // Obtener los datos de las actividades
    const {
        name, 
        difficulty, 
        duration, 
        season, 
        countries
    } = req.body;

    try {
        let activity = await activityModel.create({name, difficulty, duration, season})
        await activity.setCountries(countries)

        
        })
    }
    
    // Validar que los datos de la actividad sean válidos
    const validationResult = validateActivity(activity);
    if (!validationResult.valid) {
        return res.status(400).json({ error: validationResult.message });
    }
    
    // Crear la actividad turística en la base de datos
    const createdActivity = database.createActivity(activity);
    
    // Devolver una respuesta con los datos de la actividad creada
    res.status(201).json(createdActivity);
});