# Code-to-Care Hackathon



Primary Care Networks (PCNs) like GPs, are increasingly stretched and patients are increasingly hospitalised due to preventable Non-Communicable Diseases (Diabetes, Heart failure, Dementia, Stroke) at a huge cost to the NHS.

We have built a realistic solution that integrates the UKs growing gig economy with accessible healthcare for those **who need it most**. 

Our platform will work between PCNs, connecting their **most at risk** patients with trained Healthcare Professionals who will complete monitoring checks.
This is with the aims to:
1. Reduce costly hospitalisations  -> **Reducing the number complex admissions**
2. Reduce PCN workload           -> **Routine work will be outsourced**
3. Improving patient wellbeing -> **Help patients proactively by avoiding rapid deteriation**

This approach will help directly help patients least engaged in healthcare and indirectly save the NHS on costly NCD complications.

### This is a mock up platform.
- as such, the codebase is a mess! But runnable.

<img src="static/Screenshot%202020-07-02%20at%2016.40.33.png" height="500" display='float:left;position:relative' />

<img src="static/Screenshot%202020-07-02%20at%2016.40.52.png" height="500" display='float:left;position:relative'/>

<img src="static/Screenshot%202020-07-02%20at%2016.41.26.png" height="500" display='float:left;position:relative'/>

<img src="static/Screenshot%202020-07-02%20at%2016.41.52.png" height="500" display='float:left;position:relative'/>



### Web
```sh
$ cd Hackathon2020
$ flask run
```
### App - only tried on mac, Soz
```sh
$ cd flask_hackathon
$ npm run ios
```


## TechStack
- BACKEND: Flask (Will want to migrate to Django for produciton) + MySQL DB
- FRONTEND: Inbuilt templating, could be persuaded to use Django solely for Restful API and have a React frontend.
- MOBILE: ReactNative.

Using **GPconnect** we hope to automate a large portion of patient data transfer, straight from the platform to the GP practices EHR.

## Proposed workflow (only T2DM)
1. GP selects patients who need closer monitoring for their T2DM by more regular check ups (eg. 50 most at risk patients)
2. Patients will be assigned to either: 
    1. HomeHealth workers that the practice have used previously. 
    2. Or a new one HomeHealth worker, accounting for **availability**, **expertise**, and **geographic range**. 
3. HomeHealth Worker contacts patient, schedules Checkup appointment.
4. HomeHealth Worker visits patient, performs check up, submits assessment notes to GPs EHR.
5. The patient will be offered the opportunity to join the app ecosystem to feedback/ review their HomeHealth Worker and manage future checkup appointments.


## Project outline
Stage 0
- mock Web and Mobile App

Stage 1
- prototype Web and Mobile App

Stage 2
- Approach a willing local Practice to trial with a handful of qualified people and patients
- Get evidence base
- rapid platform feedback and development

Stage 3
- Approach CCG to increase availability to GPs in catchment area
- Develop onboarding process for HCWs to work on the platform for 

Stage 4
- Recruit students in a healthcare field as well as bank staff 
- Run onboarding

## FAQs 
