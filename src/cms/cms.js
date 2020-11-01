import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import WhoWeArePagePreview from "./preview-templates/WhoWeArePagePreview";
import WhatWeDoPagePreview from "./preview-templates/WhatWeDoPagePreview";
import HowYouCanHelpPagePreview from "./preview-templates/HowYouCanHelpPagePreview";
import RefugeeCrisisPagePreview from "./preview-templates/RefugeeCrisisPagePreview";
import FaqPagePreview from "./preview-templates/FaqPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactUsPagePreview from "./preview-templates/ContactUsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("contact-us", ContactUsPagePreview);
CMS.registerPreviewTemplate("who-we-are", WhoWeArePagePreview);
CMS.registerPreviewTemplate("what-we-do", WhatWeDoPagePreview);
CMS.registerPreviewTemplate("refugee-crisis", RefugeeCrisisPagePreview);
CMS.registerPreviewTemplate("how-you-can-help", HowYouCanHelpPagePreview);
CMS.registerPreviewTemplate("faq", FaqPagePreview);
CMS.registerPreviewTemplate("news", BlogPostPreview);
