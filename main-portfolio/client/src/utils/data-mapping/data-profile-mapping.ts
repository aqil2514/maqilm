import {
  newIcons as newFSDIcons,
  certificates as devCertificates,
} from "../../lib/data/profile/fullstack-developer";
import {
  newIcons as newWriterIcons,
  certificates as writerCertificates,
} from "../../lib/data/profile/writer";
import {
  newIcons as newAdministrationIcons,
  certificates as adminCertificates,
  workExperience as adminWorkExperience,
} from "../../lib/data/profile/administration";


export const certificatesMapping: Record<
  GenType.FieldId,
  typeof adminCertificates
> = {
  "fullstack-developer": devCertificates,
  writer: writerCertificates,
  "staff-administration": adminCertificates,
  unselected: [] as typeof adminCertificates,
};

export const workExperienceMapping: Record<
  GenType.FieldId,
  typeof adminWorkExperience
> = {
  "fullstack-developer": [] as typeof adminWorkExperience,
  writer: [] as typeof adminWorkExperience,
  "staff-administration": adminWorkExperience,
  unselected: [] as typeof adminWorkExperience,
};

export const newIconsMapping: Record<GenType.FieldId, typeof newFSDIcons> = {
  "fullstack-developer": newFSDIcons,
  writer: newWriterIcons,
  "staff-administration": newAdministrationIcons,
  unselected: {},
};
