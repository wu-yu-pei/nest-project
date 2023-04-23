import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rule } from './rule.entry';

@Injectable()
export class RuleService {
  constructor(@InjectRepository(Rule) private ruleRep: Rule) {}
}
