import axios from 'axios';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

main().catch((err) => console.log(err));

class UniversityDto {
  domains: string[];
  web_pages: string[];
  alpha_two_code: string;
  name: string;
  country: string;
  'state-province'?: string;
}

const UniversitySchema = new mongoose.Schema({
  domains: [String],
  alpha_two_code: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  web_pages: [String],
  name: {
    type: String,
    require: true,
  },
  'state-province': {
    type: String,
    require: false,
  },
});

export const universityModel = mongoose.model('Universities', UniversitySchema);

export const countries = [
  'Argentina',
  'Brazil',
  'Chile',
  'Colombia',
  'Paraguay',
  'Peru',
  'Suriname',
  'Uruguay',
];

async function create() {
  const promisesArray = countries.map((country: string) => {
    return findUniversitiesByCountryName(country);
  });

  return Promise.all(promisesArray);
}

async function findUniversitiesByCountryName(
  country: string,
): Promise<UniversityDto[]> {
  const universities = await axios.get(
    `http://universities.hipolabs.com/search?country=${country}`,
  );

  return saveUniversities(universities.data);
}

async function saveUniversities(universities: any) {
  const promisesArray = universities.map((e: UniversityDto) => {
    const newUniversity: UniversityDto = {
      domains: e['domains'],
      alpha_two_code: e['alpha_two_code'],
      country: e['country'],
      name: e['name'],
      web_pages: e['web_pages'],
      'state-province': e['state-province'],
    };
    const university = new universityModel(newUniversity);
    return university.save();
  });
  return Promise.all(promisesArray);
}

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  const result = await create();
  console.log(result);
}
