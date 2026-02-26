

export interface MemberInfo {
  timestamp: string;
  role: string;
  country: string;
  areas_of_study: string[];
  area_of_interest: string;
  specific_interests: string[];
  skills: string[];
}

let cache: Promise<MemberInfo[]> | null = null;

function parseSkills(skills: string): string[] {
  // strip
  skills = skills.trim();

  return skills.split(",").map((skill) => skill.trim());
}

function parseCountry(country: string): string {
  let country_mapping: Record<string, string> = {
    UK: "United Kingdom",
    USA: "United States",
    Türkiye: "Turkey",
    "Vietnam": "Viet Nam",
  };

  return country_mapping[country] || country;
}

function parseAreaOfStudy(areaOfStudy: string): string[] {
  // strip
  areaOfStudy = areaOfStudy.trim();

  // replace parens, colons and " and " with commas
  const areas = areaOfStudy.replace(/\(|\)|:/g, ",").replace(" and ", ",");

  // split on commas
  return areas.split(",").map(
    // For each area, strip the empty spaces and quotes
    (area) =>
      area.replace(/"/g, "").replace(/'/g, "").replace(/\./g, "").trim(),
  );
}


export async function downloadAndParseMembers(): Promise<MemberInfo[]> {
  // Load local JSON file instead of Google Sheets
  const members: MemberInfo[] = (await import("./members.json")).default;
  return members;
}

export async function getMembers(): Promise<MemberInfo[]> {
  if (!cache) {
    cache = downloadAndParseMembers();
    return cache;
  }
  return cache;
}

export function getMemberCountsByCountry(members: MemberInfo[]): {
  [country: string]: number;
} {
  const countries = members.map((member) => member.country);

  // Use reduce to count occurrences of each country
  return countries.reduce(
    (acc, country) => {
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    },
    {} as { [country: string]: number },
  );
}
