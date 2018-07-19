import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: Level.Beginner
    },
    {
      name: 'JavaScript',
      level: Level.Beginner
    },
    {
      name: 'HTML',
      level: Level.Advanced
    },
    {
      name: 'CSS',
      level: Level.Advanced
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  };
  
  constructor() { }
}
