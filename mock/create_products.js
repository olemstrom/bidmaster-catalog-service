const request = require('request');

const MOCK_ADD_PRODUCTS = [
    {"description":"Complete traumatic amputation of right great toe, subs","name":"Benzalkonium chloride","current_price":"70"},
    {"description":"Driver of bus inj pick-up truck, pk-up/van nontraf, sequela","name":"Alcohol","current_price":"20"},
    {"description":"Toxic effect of copper and its compounds, accidental, subs","name":"Mirtazapine","current_price":"78"},
    {"description":"Dislocation of unsp interphaln joint of r rng fngr, init","name":"Diltiazem Hydrochloride","current_price":"47"},
    {"description":"Strain of intrinsic musc/fasc/tend right thumb at wrs/hnd lv","name":"BENZALKONIUM CHLORIDE","current_price":"27"},
    {"description":"Nondisp fx of shaft of 4th MC bone, r hand, 7thK","name":"Belladonna, Calcarea carbonica, Phosphorus, Pulsatilla, Silicea,","current_price":"89"},
    {"description":"Injury of cutan sensory nerve at lower leg level, right leg","name":"Isoflurane","current_price":"46"},
    {"description":"Burn unsp deg mult sites of right lower limb, except ank/ft","name":"Camphor, Menthol, Methyl Salicylate","current_price":"87"},
    {"description":"Encntr for mental health services for child abuse problems","name":"Loperamide Hydrochloride","current_price":"36"},
    {"description":"Disp fx of neck of unsp rad, subs for clos fx w delay heal","name":"OCTINOXATE, OCTISALATE, OXYBENZONE, and TITANIUM DIOXIDE","current_price":"94"},
    {"description":"Family history of malignant neoplasm of kidney","name":"Carbon Dioxide-Oxygen-Nitrogen Mixture","current_price":"67"},
    {"description":"Poisn by dental drugs, topically applied, self-harm, subs","name":"Acetaminophen, Doxylamine Succinate, Phenylephrine Hydrochloride","current_price":"17"},
    {"description":"Unsp fracture of left ischium, subs for fx w nonunion","name":"Lidocaine","current_price":"03"},
    {"description":"Mantle cell lymphoma","name":"Brazil Nut","current_price":"17"},
    {"description":"Displ commnt fx shaft of l femr, 7thJ","name":"vigabatrin","current_price":"89"},
    {"description":"Unsp injury of unsp tibial artery, unspecified leg, sequela","name":"STANNOUS FLUORIDE","current_price":"70"},
    {"description":"Artificial opening status","name":"Atropa belladonna and Drosera rotundifolia and Prunus laurocerasus leaf and Rumex crispus root and Polygala Senega Root and Verbascum thapsus","current_price":"58"},
    {"description":"Crushing injury of right index finger, initial encounter","name":"TAMSULOSIN HYDROCHLORIDE","current_price":"62"},
    {"description":"Circumvallate placenta","name":"Zinc Oxide, Octinoxate, Octisalate","current_price":"12"},
    {"description":"Blister (nonthermal), right foot","name":"Bismuth Subsalicylate","current_price":"75"},
    {"description":"Poisoning by local astringents/detergents, accidental, subs","name":"Crab","current_price":"89"},
    {"description":"Unspecified injury of blood vessel of left ring finger","name":"potassium chloride","current_price":"47"},
    {"description":"Toxic effect of strychnine and its salts, self-harm, init","name":"Salicylic Acid","current_price":"94"},
    {"description":"Underdosing of other antiprotozoal drugs, sequela","name":"Glyburide and Metformin Hydrochloride","current_price":"88"},
    {"description":"Superficial foreign body of left ring finger, subs encntr","name":"Acetaminophen, Caffeine","current_price":"70"},
    {"description":"Insect bite (nonvenomous) of left back wall of thorax, subs","name":"Glyburide and Metformin","current_price":"11"},
    {"description":"Pedl cyc pasngr inj pk-up truck, pk-up/van in traf, sequela","name":"midodrine hydrochloride","current_price":"41"},
    {"description":"Mechanical loosening of unsp internal prosthetic joint","name":"TITANIUM DIOXIDE, ZINC OXIDE","current_price":"61"},
    {"description":"Inj femoral vein at hip and thigh level, left leg, sequela","name":"norethindrone and ethinyl estradiol, and ferrous fumarate","current_price":"92"},
    {"description":"Corrosion of second degree of right foot, initial encounter","name":"OCTINOXATE and OCTOCRYLENE","current_price":"45"},
    {"description":"Complex tear of lateral meniscus, current injury","name":"GABAPENTIN","current_price":"93"},
    {"description":"Other secondary osteonecrosis, unspecified femur","name":"TRICLOSAN","current_price":"03"},
    {"description":"Burn of unsp deg mult sites of right wrist and hand, init","name":"Promethazine Hydrochloride","current_price":"12"},
    {"description":"Strain of unsp musc/fasc/tend at thi lev, left thigh, init","name":"peginterferon beta-1a","current_price":"56"},
    {"description":"Fecal incontinence","name":"AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, OXYBENZONE","current_price":"70"},
    {"description":"Insect bite (nonvenomous) of right thumb, sequela","name":"VALACYCLOVIR HYDROCHLORIDE","current_price":"31"},
    {"description":"Carrier of bacterial disease due to staphylococci","name":"Benzocaine and Menthol","current_price":"74"},
    {"description":"Non-prs chronic ulc unsp prt of unsp low leg w unsp severity","name":"Octinoxate and Oxybenzone","current_price":"09"},
    {"description":"Nondisp fx of olecran pro w intartic extension of right ulna","name":"ONION, COFFEE BEAN, CHAMOMILE, CALCIUM SULFIDE, GOLDENSEAL, SODIUM CHLORIDE, STRYCHNOS NUX-VOMICA SEED, PHOSPHORUS, PULSATILLA VULGARIS, and SULFUR","current_price":"98"},
    {"description":"Displ spiral fx shaft of unsp fibula, 7thJ","name":"Tolnaftate","current_price":"90"},
    {"description":"Unspecified injury of other intra-abdominal organs","name":"Menthol","current_price":"94"},
    {"description":"Silent myocardial ischemia","name":"Losartan Potassium","current_price":"83"},
    {"description":"Disp fx of second metatarsal bone, left foot, sequela","name":"ampicillin sodium and sulbactam sodium","current_price":"60"},
    {"description":"Salter-Harris Type I physeal fracture of l calcaneus, init","name":"TITANIUM DIOXIDE","current_price":"82"},
    {"description":"Lead-induced chronic gout, left elbow, with tophus (tophi)","name":"ciprofloxacin hydrochloride","current_price":"87"},
    {"description":"Displ seg fx shaft of humer, l arm, subs for fx w malunion","name":"Octinoxate","current_price":"90"},
    {"description":"Post-traumatic osteoarthritis, unspecified elbow","name":"OCTINOXATE","current_price":"23"},
    {"description":"Sltr-haris Type I physl fx upper end of unsp fibula, sequela","name":"OCTINOXATE, TITANIUM DIOXIDE, and ZINC OXIDE","current_price":"78"},
    {"description":"Unsp inj extn musc/fasc/tend l idx fngr at wrs/hnd lv, sqla","name":"Sennosides","current_price":"54"},
    {"description":"War operations involving oth dest arcrft, civilian, sequela","name":"SALICYLIC ACID","current_price":"47"}
];


MOCK_ADD_PRODUCTS.forEach(function(item) {
    request.post('http://localhost:8080/api/item', { json: item })
        .on('error', function(error) { console.error(error) })
        .on('end', function(end) { console.log(end) })
});