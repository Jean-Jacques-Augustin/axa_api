import React, {useState} from 'react';
import InputComponent from "../components/InputComponent";
import TextAreaComponent from "../components/TextAreaComponent";
import ImageComponent from "../components/ImageComponent";
import RadioBoxComponent from "../components/RadioBoxComponent";
import WysiwygEditorComponent from "../components/WysiwygEditorComponent";
import ExcelTableComponent from "../components/ExcelTableComponent";
import "./styles.css"


const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        opportunityNumber: '',
        refDossier: '',
        siretSiren: '',
        affaire: '',
        clientName: '',
        intermediary: '',
        briefDescription: '',
        descriptionImage: null,
        hasCoInsurance: 'Non',
        operationAddress: '',
        operationPlan: null,
        detailedDescription: '',
        operationCost: {
            amount1: 0, amount2: 0, totalAmount: 0,
        },
    });

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleStepSubmit = (e) => {
        e.preventDefault();
        console.log('Données soumises:', formData);
        handleNext();
    };

    return (<div
        className={"container"}

    >
        <h1
            className={"typo-title typo-color--axablue"}
            style={{
                textAlign: "center",
                margin: "20px 0",
                fontSize: "3rem",
            }}
        >
            Créer une opportunité
        </h1>

        <h3
            className={"typo-subtitle typo-color--axablue"}
            style={{
                textAlign: "center",
                margin: "20px 0",
                fontSize: "2rem",
            }}
        >
            {
                activeStep === 0 && "Informations générales"
            }
            {
                activeStep === 1 && "Informations sur le client"
            }
            {
                activeStep === 2 && "Informations sur l'opération"
            }
            {
                activeStep === 3 && "Confirmation"
            }

            <br/>
            <span
                style={{
                    fontSize: "1rem",
                    color: "#000",
                }}
            >
                Étape {activeStep + 1} sur 3
            </span>
        </h3>

        <div
            style={{
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            {activeStep === 0 && (<form onSubmit={handleStepSubmit}>
                <InputComponent
                    label="Numéro d’opportunité"
                    type="text"
                    name="opportunityNumber"
                    value={formData.opportunityNumber}
                    onChange={(e) => setFormData({...formData, opportunityNumber: e.target.value})}
                />
                <div
                    className={"button-nav"}
                >
                    <button type="submit" className={"button-next cta-button__btn--action"}>Suivant</button>
                </div>
            </form>)}

            {activeStep === 1 && (<form onSubmit={handleStepSubmit}>
                <InputComponent
                    label="Référence du dossier"
                    type="text"
                    name="refDossier"
                    value={formData.refDossier}
                    onChange={(e) => setFormData({...formData, refDossier: e.target.value})}
                />
                <InputComponent
                    label="Numéro SIRET SIREN"
                    type="text"
                    name="siretSiren"
                    value={formData.siretSiren}
                    onChange={(e) => setFormData({...formData, siretSiren: e.target.value})}
                />
                <InputComponent
                    label="Affaire"
                    type="text"
                    name="affaire"
                    value={formData.affaire}
                    onChange={(e) => setFormData({...formData, affaire: e.target.value})}
                />
                <InputComponent
                    label="Nom du client"
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                />
                <InputComponent
                    label="Intermédiaire (Nom + Code portefeuille)"
                    type="text"
                    name="intermediary"
                    value={formData.intermediary}
                    onChange={(e) => setFormData({...formData, intermediary: e.target.value})}
                />
                <TextAreaComponent
                    label="Description succincte"
                    name="briefDescription"
                    value={formData.briefDescription}
                    onChange={(e) => setFormData({...formData, briefDescription: e.target.value})}
                />
                <ImageComponent
                    label="Image en lien avec la description"
                    name="descriptionImage"
                />
                <RadioBoxComponent
                    label="Présence d’une coassurance"
                    options={[{value: 'Oui', label: 'Oui'}, {value: 'Non', label: 'Non'},]}
                    name="hasCoInsurance"
                />
                <div
                    className={"button-nav"}
                >
                    <button type="button" className={"button-return"} onClick={handleBack}>Retour
                    </button>
                    <button type="submit" className={"button-next cta-button__btn--action"}>Suivant</button>
                </div>
            </form>)}

            {activeStep === 2 && (<form onSubmit={handleStepSubmit}>
                <InputComponent
                    label="Adresse de l'opération"
                    type="text"
                    name="operationAddress"
                    value={formData.operationAddress}
                    onChange={(e) => setFormData({...formData, operationAddress: e.target.value})}
                />
                <ImageComponent
                    label="Plan de l'adresse de l'opération"
                    name="operationPlan"
                />
                <WysiwygEditorComponent
                    label="Descriptif détaillé de l'opération"
                    name="detailedDescription"
                />
                <ExcelTableComponent
                    label="Coût de l'opération (tarif)"
                    name="operationCost"
                />

                <div
                    className={"button-nav"}
                >
                    <button type="button" className={"button-return"} onClick={handleBack}>Retour
                    </button>
                    <button type="submit" className={"button-next cta-button__btn--action"}>Soumettre</button>
                </div>
            </form>)}

            {activeStep === 3 && (<div>
                <h3>Formulaire soumis avec succès!</h3>
                <p>Les données ont été enregistrées.</p>
            </div>)}
        </div>
    </div>);
};

export default Create;
