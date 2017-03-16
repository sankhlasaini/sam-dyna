import { Injectable } from '@angular/core';
import { SamDynaElementBase } from './sam-dyna-element-base';
import { SamDynaTitleDiv, SamDynaIconDiv, SamDynaChips } from './sam-dyna-division';
import { SamDynaInput } from './sam-dyna-input';
// import { PersonalInfoQuestion } from './question-personalInfo';
// import { SkillsInfoQuestion } from './question-skills';

@Injectable()
export class SamDynaElementService {


  userData = {
    "username": "",
    "profession": "",
    "createdOn": "Date",
    "createdBy": "",
    "updatedOn": "",
    "updatedBy": "",
    "personalinfo": {
      "name": "Muruguavel A",
      "fname": "Murugavel",
      "lname": "Annamalai Arasu Chkaravarti Boss Kabali AAA",
      "dob": "11-11-1992",
      "gender": "m",
      "email": "muruga55@gmail.com",
      "altemail": "muruga55@gmail.com",
      "contact": {
        "I": "9988989771",
        "II": "04242425252"
      },
      "address": {
        "loc": "SomeWhere",
      },
      "married": false,
      "identity": [
        {
          "regno": ""
        },
        {
          "adhaar": "1212123231"
        }
      ],

      "preflang": "English",
      "nativelang": "Hindi",
      "lang": [
        {
          "name": "Hindi",
          "r": true,
          "w": false,
          "s": true
        },
        {
          "name": "English",
          "r": true,
          "w": true,
          "s": false
        }
      ],
      "pic": "http://profilepicurl",
      "center": "",
    },
    "qualifications": [
      {
        "name": "BE",
        "subject": "electronics",
        "academictype": "Graduation",
        "batch": "2012",
        "result": { "score": "85", "unit": "%age" },
        "institute": "ABC College Of Tech",
        "affiliation": "ABC University",
        "location": "SomeWhere"
      },
      {
        "name": "ME",
        "level": "Post Graduation",
        "yr": "2016",
        "percentage": "95",
        "institute": "ABC College Of Tech",
        "affiliatedBy": "ABC University",
        "loc": "SomeWhere"
      }
    ],
    "preferences": {
      "looking": true,
      "roles": [
        {
          "name": "FrontEndDeveloper",
          "engagement": "full",
          "expectedSal": { "min": "", "max": "" },
          "skills": ["MEAN"],
          "availableFrom": "12-12-2017",
          "locations": []
        }
      ]
    },
    "experiences": [
      {
        "workplace": "TCS",
        "designation": "",
        "role": "SoftwareDeveloper",
        "duration": { "start": "", "end": "" },
        "location": "Pune",
        "skills": [
          "java",
          "HTML",
          "Angular2"
        ]
      }
    ],
    "skills": [
      {
        "name": "java",
        "experience": "2",
        "expertise": "Skilled"
      },
      {
        "name": ".net",
        "exp": "1",
        "expertise": "fresher"
      }
    ],
    "projects": [
      {
        "name": "Digital",
        "description": "",
        "duration": { "start": "", "end": "" },
        "location": "bangalore",
        "skills": [
          "Java",
          ".net"
        ],
        "role": "Team Lead",
      }
    ],
    "showcase": [
      {
        "contenttype": "image/vidieo/link",
        "title": "Facebook_url",
        "url": "www.facebook.com/gowthamjeeva",
        "desc": "short description"
      },
      {
        "title": "Linkedin_url",
        "url": "www.linkedin.com/gowthamjeeva",
        "desc": "short description"
      },
      {
        "title": "video",
        "url": "Amazon server url",
        "desc": "short description"
      }
    ],
  }

  skills() {
    this.userData.skills.forEach(element => {
      [{ title: element.name }]
    })
  }

  getElements() {
    let elementStandard: SamDynaElementBase<any>[] = [
      //  div test
      new SamDynaIconDiv({
        key: 'personalInfo',
        label: 'Personal Info',
        order: 1,
        options: [
          { icon: "person", data: this.userData.personalinfo.name },
          { icon: "email", data: this.userData.personalinfo.email },
          { icon: "cake", data: this.userData.personalinfo.dob },
          { icon: "phone", data: this.userData.personalinfo.contact.I + ', ' + this.userData.personalinfo.contact.II },
          { icon: "location_on", data: this.userData.personalinfo.address.loc },
          { icon: "chrome_reader_mode", data: this.userData.personalinfo.identity[1]['adhaar']},
          { icon: "record_voice_over", data: this.userData.personalinfo.preflang },
        ]
      }),

      new SamDynaChips({
        key: 'skills',
        label: 'Skills',
        order: 2,
        options: this.userData.skills
        // for colors in chips 0:none , 1:primary ,2:accent ,3:warn
        // this.userData.skills.forEach(element => {
        //   [{ title: element.name }]
        // })
        //  [{ title: this.userData.skills[1].name }]

      }),

      // new SamDynaInput({
      //   key: 'personal2',
      //   label: 'Input Field',
      //   order: 2,
      //   options: [
      //     { "key": "Name", "value": "sheenam" },
      //     { "key": "Email", "value": "sankhlasiaNI@gmail.com" },
      //     { "key": "AGE  and sex", "value": "23" }
      //   ]
      // }),


      // persnal info
      //   new PersonalInfoQuestion({
      //     key: 'personalInfo',
      //     label: 'PERSONAL INFO',
      //     order: 1,
      //     options: [
      //       { "key": "Name", "value": "sheenam" },
      //       { "key": "Email", "value": "sankhlasiaNI@gmail.com" },
      //       { "key": "AGE  and sex", "value": "23"}
      //     ]
      //   }),

      //   new SkillsInfoQuestion({
      //     key: 'skillsInfo',
      //     label: 'SKILLS INFO',
      //     order: 2,
      //     options: [
      //       { "key": "JAVA", "value": "EXP 2" },
      //       { "key": ".NET", "value": "EXP 4" }
      //     ]
      //   }),
      // 
    ];
    return elementStandard.sort((a, b) => a.order - b.order);
  }
}