module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){//async para utilizar o await
    //inserir dados na tabela de proffy
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"

        );
    `)

    const proffy_id = insertedProffy.lastID // ID DA TABELA PROFFYS.

    //inserir dados da tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id

            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    //esse inserção foi diferente devido receber um array de horarios.
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        `)
    })

    //aqui vou executar todos os db.runs() das class_schedule
    //promise quer dizer promesa, all todos.
    await Promise.all(insertedAllClassScheduleValues)
}