import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import WhoWeHelpPagePreview from "./preview-templates/WhoWeHelpPagePreview";
import VolunteerPagePreview from "./preview-templates/VolunteerPagePreview";
import RefugeeCrisisPagePreview from "./preview-templates/RefugeeCrisisPagePreview";
import FaqPagePreview from "./preview-templates/FaqPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("who-we-help", WhoWeHelpPagePreview);
CMS.registerPreviewTemplate("refugee-crisis", RefugeeCrisisPagePreview);
CMS.registerPreviewTemplate("volunteer", VolunteerPagePreview);
CMS.registerPreviewTemplate("faq", FaqPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
