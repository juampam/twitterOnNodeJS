'use strict'

const mongoose = require("mongoose")
const app = require("./app")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/IN6BM', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Se encuentra conectado a la base de datos');
    
    app.set('port', process.env.PORT || 3000)
    app.listen(app.get('port'), ()=>{
        console.log(`El servidor esta corriendo en el puerto: ${app.get('port')}`+"sasas");
   /*     console.log("                                                                                      ################                    *                          ")
        console.log("                                                                                  #########################          #####                           ")
        console.log("                              ###                                              #########################################                             ")
        console.log("                             #######                                         #########################################                               ")
        console.log("                            ###########                                    ########################################(    ####                         ")
        console.log("                            ##############                                ################################################                           ")
        console.log("                            #################                             ##############################################                             ")
        console.log("                            #####################                       ############################################                                ")
        console.log("                            ##########################                  ##########################################                                  ")
        console.log("                              ,################################          .#########################################                                  ")
        console.log("                                ###################################################################################                                  ")
        console.log("                                  #################################################################################                                  ")
        console.log("                            #######( #############################################################################                                   ")
        console.log("                            ######################################################################################                                   ")
        console.log("                             ####################################################################################                                    ")
        console.log("                              ##################################################################################                                    ")
        console.log("                               ############### Se encuentra conectado a la base de datos ######################                                  ")
        console.log("                                 #############################################################################                                      ")
        console.log(`                                  ########### El servidor esta corriendo en el puerto: ${app.get('port')}`+" #################                                       ")
        console.log("                                   #########################################################################                                       ");
        console.log("                                       *###################################################################                                        ");
        console.log("                                  ########################################################################                                         ");
        console.log("                                   ######################################################################                                          ");
        console.log("                                     ###################################################################                                            ");
        console.log("                                         ##############################################################                                              ");
        console.log("                                             #########################################################                                                ");
        console.log("                                                  ##################################################                                                  ");
        console.log("                                                     #############################################                                                    ");
        console.log("                                                 ##############################################                                                       ");
        console.log("                                           #################################################                                                          ");
        console.log("                          ###############################################################                                                             ");
        console.log("                              ######################################################                                                                  ");
        console.log("                                    ###########################################                                                                       ");
        console.log("                                            ##########################                                                                                ");*/
    })
}).catch(err => console.log(err))