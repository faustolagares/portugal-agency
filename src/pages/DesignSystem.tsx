import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, CheckCircle, AlertCircle, Info, Settings, Mail, Phone, MapPin } from "lucide-react";

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container max-w-6xl py-xl">
          <h1 className="text-h1 text-foreground">Design System</h1>
          <p className="text-body-lg text-muted-foreground mt-sm">
            Visual reference for the Immigration Office application
          </p>
        </div>
      </header>

      <main className="container max-w-6xl py-2xl space-y-3xl">
        {/* Color System */}
        <ColorSystemSection />
        
        {/* Text Selection */}
        <TextSelectionSection />
        
        {/* Typography */}
        <TypographySection />
        
        {/* Spacing */}
        <SpacingSection />
        
        {/* Radius */}
        <RadiusSection />
        
        {/* Elevation */}
        <ElevationSection />
        
        {/* Buttons */}
        <ButtonsSection />
        
        {/* Form Elements */}
        <FormElementsSection />
        
        {/* Icons */}
        <IconographySection />
        
        {/* Accessibility */}
        <AccessibilitySection />
        
        {/* Usage Examples */}
        <UsageExamplesSection />
      </main>
    </div>
  );
};

/* ========== SECTION COMPONENTS ========== */

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-lg">
    <h2 className="text-h2 text-foreground">{title}</h2>
    <p className="text-body text-muted-foreground mt-xs">{description}</p>
  </div>
);

/* ========== 1. COLOR SYSTEM ========== */

const ColorSystemSection = () => {
  const colorTokens = [
    { name: "Background", token: "--background", usage: "Page and section backgrounds", className: "bg-background border" },
    { name: "Foreground", token: "--foreground", usage: "Primary text color", className: "bg-foreground" },
    { name: "Card", token: "--card", usage: "Card and elevated surface backgrounds", className: "bg-card border" },
    { name: "Card Foreground", token: "--card-foreground", usage: "Text within cards", className: "bg-card-foreground" },
    { name: "Popover", token: "--popover", usage: "Dropdown and popover backgrounds", className: "bg-popover border" },
    { name: "Popover Foreground", token: "--popover-foreground", usage: "Text within popovers", className: "bg-popover-foreground" },
    { name: "Primary", token: "--primary", usage: "Main CTAs, key actions, important buttons", className: "bg-primary" },
    { name: "Primary Foreground", token: "--primary-foreground", usage: "Text on primary backgrounds", className: "bg-primary-foreground border" },
    { name: "Secondary", token: "--secondary", usage: "Secondary buttons and backgrounds", className: "bg-secondary" },
    { name: "Secondary Foreground", token: "--secondary-foreground", usage: "Text on secondary backgrounds", className: "bg-secondary-foreground" },
    { name: "Accent", token: "--accent", usage: "Links, highlights, focus states, subtle emphasis", className: "bg-accent" },
    { name: "Accent Foreground", token: "--accent-foreground", usage: "Text on accent backgrounds", className: "bg-accent-foreground border" },
    { name: "Muted", token: "--muted", usage: "Subtle backgrounds, disabled states", className: "bg-muted" },
    { name: "Muted Foreground", token: "--muted-foreground", usage: "De-emphasized text, placeholders", className: "bg-muted-foreground" },
    { name: "Border", token: "--border", usage: "Borders, dividers, separators", className: "bg-border" },
    { name: "Input", token: "--input", usage: "Form input borders", className: "bg-input" },
    { name: "Ring", token: "--ring", usage: "Focus rings and outlines", className: "bg-ring" },
    { name: "Destructive", token: "--destructive", usage: "Error states, delete actions", className: "bg-destructive" },
    { name: "Destructive Foreground", token: "--destructive-foreground", usage: "Text on destructive backgrounds", className: "bg-destructive-foreground border" },
  ];

  return (
    <section>
      <SectionHeader 
        title="1. Color System" 
        description="All color tokens with their intended usage. Primary (red) is reserved for CTAs and key actions. Accent (navy) is used for links, highlights, and focus states."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {colorTokens.map((color) => (
          <div key={color.token} className="surface-raised p-md">
            <div className={`w-full h-16 ${color.className}`} />
            <div className="mt-sm">
              <p className="text-label text-foreground">{color.name}</p>
              <p className="text-mono text-muted-foreground">{color.token}</p>
              <p className="text-caption mt-xs">{color.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ========== 2. TEXT SELECTION ========== */

const TextSelectionSection = () => (
  <section>
    <SectionHeader 
      title="2. Text Selection Styling" 
      description="Global text selection uses the accent color (navy) for a branded, intentional feel."
    />
    <div className="surface-raised p-lg space-y-md">
      <p className="text-body">
        <strong>Try selecting this text:</strong> When users select text anywhere in the application, 
        the selection background uses the accent color (navy) with white text. This creates a cohesive, 
        branded experience rather than the default browser blue.
      </p>
      <h3 className="text-h3">Heading Text Selection</h3>
      <p className="text-body-sm text-muted-foreground">
        The selection style applies consistently across all text elements including headings, body text, 
        labels, form fields, and any editable content.
      </p>
      <div className="bg-muted p-md">
        <code className="text-sm">Code blocks also have branded selection styling</code>
      </div>
    </div>
  </section>
);

/* ========== 3. TYPOGRAPHY ========== */

const TypographySection = () => {
  const typographyTokens = [
    { name: "Display", className: "text-display", family: "Tomato Grotesk", weight: "600", size: "4rem", lineHeight: "1", letterSpacing: "-0.03em" },
    { name: "H1", className: "text-h1", family: "Tomato Grotesk", weight: "600", size: "2.5rem", lineHeight: "1", letterSpacing: "-0.03em" },
    { name: "H2", className: "text-h2", family: "Tomato Grotesk", weight: "600", size: "2rem", lineHeight: "1", letterSpacing: "-0.02em" },
    { name: "H3", className: "text-h3", family: "Tomato Grotesk", weight: "500", size: "1.5rem", lineHeight: "1", letterSpacing: "-0.02em" },
    { name: "H4", className: "text-h4", family: "Tomato Grotesk", weight: "500", size: "1.25rem", lineHeight: "1", letterSpacing: "-0.02em" },
    { name: "Body Large", className: "text-body-lg", family: "Tomato Grotesk", weight: "400", size: "1.125rem", lineHeight: "1.7", letterSpacing: "0" },
    { name: "Body Default", className: "text-body", family: "Tomato Grotesk", weight: "400", size: "1rem", lineHeight: "1.7", letterSpacing: "0" },
    { name: "Body Small", className: "text-body-sm", family: "Tomato Grotesk", weight: "400", size: "0.875rem", lineHeight: "1.6", letterSpacing: "0" },
    { name: "Caption", className: "text-caption", family: "Tomato Grotesk", weight: "400", size: "0.75rem", lineHeight: "1.5", letterSpacing: "0" },
    { name: "Label", className: "text-label", family: "Tomato Grotesk", weight: "500", size: "0.875rem", lineHeight: "1", letterSpacing: "0" },
  ];

  return (
    <section>
      <SectionHeader 
        title="3. Typography System" 
        description="Professional typography using Tomato Grotesk exclusively. Headings use line-height: 1 with tight letter-spacing."
      />
      <div className="space-y-md">
        {typographyTokens.map((token) => (
          <div key={token.name} className="surface-raised p-md flex flex-col lg:flex-row lg:items-center gap-md">
            <div className="lg:w-1/3">
              <p className={`${token.className} text-foreground`}>
                Immigration Services
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-sm text-body-sm">
              <div>
                <p className="text-caption">Family</p>
                <p className="text-foreground">{token.family}</p>
              </div>
              <div>
                <p className="text-caption">Weight</p>
                <p className="text-foreground">{token.weight}</p>
              </div>
              <div>
                <p className="text-caption">Size</p>
                <p className="text-foreground">{token.size}</p>
              </div>
              <div>
                <p className="text-caption">Line Height</p>
                <p className="text-foreground">{token.lineHeight}</p>
              </div>
              <div>
                <p className="text-caption">Letter Spacing</p>
                <p className="text-foreground">{token.letterSpacing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ========== 4. SPACING ========== */

const SpacingSection = () => {
  const spacingTokens = [
    { name: "xs", value: "0.25rem (4px)", className: "w-xs" },
    { name: "sm", value: "0.5rem (8px)", className: "w-sm" },
    { name: "md", value: "1rem (16px)", className: "w-md" },
    { name: "lg", value: "1.5rem (24px)", className: "w-lg" },
    { name: "xl", value: "2rem (32px)", className: "w-xl" },
    { name: "2xl", value: "3rem (48px)", className: "w-2xl" },
    { name: "3xl", value: "4rem (64px)", className: "w-3xl" },
  ];

  return (
    <section>
      <SectionHeader 
        title="4. Spacing and Layout Tokens" 
        description="Consistent spacing scale for margins, padding, and gaps. Max content width: 1400px (container)."
      />
      <div className="surface-raised p-lg">
        <div className="space-y-md">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-lg">
              <div className="w-20">
                <p className="text-label text-foreground">{token.name}</p>
                <p className="text-caption">{token.value}</p>
              </div>
              <div className={`h-4 bg-primary ${token.className}`} />
            </div>
          ))}
        </div>
        <div className="mt-xl pt-lg border-t border-border">
          <p className="text-label text-foreground mb-sm">Usage Examples</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-body-sm">
            <div className="bg-muted p-md">
              <p className="font-medium">Card Padding</p>
              <p className="text-muted-foreground">Use <code className="text-sm">p-lg</code> or <code className="text-sm">p-xl</code></p>
            </div>
            <div className="bg-muted p-md">
              <p className="font-medium">Section Spacing</p>
              <p className="text-muted-foreground">Use <code className="text-sm">py-2xl</code> or <code className="text-sm">py-3xl</code></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== 5. RADIUS ========== */

const RadiusSection = () => {
  const radiusTokens = [
    { name: "All Corners", token: "--radius", value: "0px", usage: "All components use sharp corners" },
  ];

  return (
    <section>
      <SectionHeader 
        title="5. Radius and Shape" 
        description="Border radius is set to 0px globally. All components use sharp, structured corners for a professional appearance."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {radiusTokens.map((token) => (
          <div key={token.name} className="surface-raised p-lg text-center">
            <div className="w-24 h-24 bg-primary mx-auto" />
            <p className="text-label text-foreground mt-md">{token.name}</p>
            <p className="text-mono text-muted-foreground">{token.token}</p>
            <p className="text-caption mt-xs">{token.value}</p>
            <p className="text-caption">{token.usage}</p>
          </div>
        ))}
        <div className="surface-raised p-lg text-center">
          <div className="w-24 h-24 bg-secondary border border-border mx-auto" />
          <p className="text-label text-foreground mt-md">Card Example</p>
          <p className="text-mono text-muted-foreground">border-radius: 0</p>
          <p className="text-caption mt-xs">Sharp edges</p>
          <p className="text-caption">Professional & structured</p>
        </div>
        <div className="surface-raised p-lg text-center">
          <Button className="mt-8">Button Example</Button>
          <p className="text-label text-foreground mt-md">Button Example</p>
          <p className="text-mono text-muted-foreground">border-radius: 0</p>
          <p className="text-caption mt-xs">No rounding</p>
          <p className="text-caption">Clean & intentional</p>
        </div>
      </div>
    </section>
  );
};

/* ========== 6. ELEVATION ========== */

const ElevationSection = () => (
  <section>
    <SectionHeader 
      title="6. Elevation and Surfaces" 
      description="Soft, minimal shadows that create depth without dramatic effects."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
      <div className="surface-flat p-lg">
        <p className="text-label text-foreground">Flat</p>
        <p className="text-mono text-muted-foreground">surface-flat</p>
        <p className="text-caption mt-sm">Background elements, inline content, form fields</p>
      </div>
      <div className="surface-raised p-lg">
        <p className="text-label text-foreground">Raised</p>
        <p className="text-mono text-muted-foreground">surface-raised</p>
        <p className="text-caption mt-sm">Cards, sections, grouped content</p>
      </div>
      <div className="surface-floating p-lg">
        <p className="text-label text-foreground">Floating</p>
        <p className="text-mono text-muted-foreground">surface-floating</p>
        <p className="text-caption mt-sm">Dialogs, popovers, dropdowns</p>
      </div>
    </div>
  </section>
);

/* ========== 7. BUTTONS ========== */

const ButtonsSection = () => (
  <section>
    <SectionHeader 
      title="7. Buttons" 
      description="Button variants designed to draw attention appropriately without being aggressive."
    />
    <div className="surface-raised p-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        {/* Primary */}
        <div className="space-y-sm">
          <p className="text-label text-foreground">Primary</p>
          <div className="flex flex-col gap-sm">
            <Button variant="default">Default</Button>
            <Button variant="default" className="opacity-80">Hover</Button>
            <Button variant="default" className="ring-2 ring-ring ring-offset-2">Focus</Button>
            <Button variant="default" disabled>Disabled</Button>
          </div>
        </div>
        
        {/* Secondary */}
        <div className="space-y-sm">
          <p className="text-label text-foreground">Secondary</p>
          <div className="flex flex-col gap-sm">
            <Button variant="secondary">Default</Button>
            <Button variant="secondary" className="opacity-80">Hover</Button>
            <Button variant="secondary" className="ring-2 ring-ring ring-offset-2">Focus</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </div>
        
        {/* Ghost */}
        <div className="space-y-sm">
          <p className="text-label text-foreground">Ghost</p>
          <div className="flex flex-col gap-sm">
            <Button variant="ghost">Default</Button>
            <Button variant="ghost" className="bg-accent/10">Hover</Button>
            <Button variant="ghost" className="ring-2 ring-ring ring-offset-2">Focus</Button>
            <Button variant="ghost" disabled>Disabled</Button>
          </div>
        </div>
        
        {/* Destructive */}
        <div className="space-y-sm">
          <p className="text-label text-foreground">Destructive</p>
          <div className="flex flex-col gap-sm">
            <Button variant="destructive">Default</Button>
            <Button variant="destructive" className="opacity-80">Hover</Button>
            <Button variant="destructive" className="ring-2 ring-ring ring-offset-2">Focus</Button>
            <Button variant="destructive" disabled>Disabled</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ========== 8. FORM ELEMENTS ========== */

const FormElementsSection = () => (
  <section>
    <SectionHeader 
      title="8. Form Elements" 
      description="Form inputs with clear focus states aligned with the accent color."
    />
    <div className="surface-raised p-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        {/* Input */}
        <div className="space-y-md">
          <div>
            <Label htmlFor="input-default">Input (Default)</Label>
            <Input id="input-default" placeholder="Enter your name" className="mt-xs" />
          </div>
          <div>
            <Label htmlFor="input-focus">Input (Focus)</Label>
            <Input id="input-focus" placeholder="Focused state" className="mt-xs ring-2 ring-ring" />
          </div>
          <div>
            <Label htmlFor="input-error" className="text-destructive">Input (Error)</Label>
            <Input id="input-error" placeholder="Error state" className="mt-xs border-destructive" />
          </div>
          <div>
            <Label htmlFor="input-disabled" className="text-muted-foreground">Input (Disabled)</Label>
            <Input id="input-disabled" placeholder="Disabled" disabled className="mt-xs" />
          </div>
        </div>
        
        {/* Textarea */}
        <div className="space-y-md">
          <div>
            <Label htmlFor="textarea-default">Textarea</Label>
            <Textarea id="textarea-default" placeholder="Enter additional details" className="mt-xs" />
          </div>
          <div>
            <Label htmlFor="select-default">Select</Label>
            <Select>
              <SelectTrigger className="mt-xs">
                <SelectValue placeholder="Select a visa type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">Work Visa</SelectItem>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="tourist">Tourist Visa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Checkbox & Radio */}
        <div className="space-y-md">
          <div className="flex items-center space-x-sm">
            <Checkbox id="terms" />
            <Label htmlFor="terms">I agree to the terms and conditions</Label>
          </div>
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-sm">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Standard Processing</Label>
            </div>
            <div className="flex items-center space-x-sm">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Express Processing</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Toggle */}
        <div className="space-y-md">
          <div className="flex items-center space-x-sm">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-sm">
            <Switch id="updates" defaultChecked />
            <Label htmlFor="updates">Status updates</Label>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ========== 9. ICONOGRAPHY ========== */

const IconographySection = () => (
  <section>
    <SectionHeader 
      title="9. Iconography" 
      description="Stroke-based icons from Lucide React. Clean, neutral, and professional. No backgrounds or containers."
    />
    <div className="surface-raised p-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-lg">
        {[
          { icon: FileText, name: "FileText", usage: "Documents" },
          { icon: Users, name: "Users", usage: "People" },
          { icon: Shield, name: "Shield", usage: "Security" },
          { icon: CheckCircle, name: "CheckCircle", usage: "Success" },
          { icon: AlertCircle, name: "AlertCircle", usage: "Warning" },
          { icon: Info, name: "Info", usage: "Information" },
          { icon: Settings, name: "Settings", usage: "Settings" },
          { icon: Mail, name: "Mail", usage: "Email" },
          { icon: Phone, name: "Phone", usage: "Phone" },
          { icon: MapPin, name: "MapPin", usage: "Location" },
        ].map(({ icon: Icon, name, usage }) => (
          <div key={name} className="text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center">
              <Icon className="w-6 h-6 text-foreground" />
            </div>
            <p className="text-label text-foreground mt-sm">{name}</p>
            <p className="text-caption">{usage}</p>
          </div>
        ))}
      </div>
      <div className="mt-lg pt-lg border-t border-border">
        <p className="text-label text-foreground mb-sm">Size Scale</p>
        <div className="flex items-end gap-lg">
          <div className="text-center">
            <FileText className="w-4 h-4 text-foreground" />
            <p className="text-caption mt-xs">16px</p>
          </div>
          <div className="text-center">
            <FileText className="w-5 h-5 text-foreground" />
            <p className="text-caption mt-xs">20px</p>
          </div>
          <div className="text-center">
            <FileText className="w-6 h-6 text-foreground" />
            <p className="text-caption mt-xs">24px</p>
          </div>
          <div className="text-center">
            <FileText className="w-8 h-8 text-foreground" />
            <p className="text-caption mt-xs">32px</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ========== 10. ACCESSIBILITY ========== */

const AccessibilitySection = () => (
  <section>
    <SectionHeader 
      title="10. Accessibility Guidelines" 
      description="Core accessibility principles for inclusive design."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="surface-raised p-lg">
        <h4 className="text-h4 text-foreground mb-md">Color Contrast</h4>
        <ul className="space-y-sm text-body-sm">
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Minimum 4.5:1 contrast ratio for normal text</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Minimum 3:1 contrast ratio for large text (18px+)</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Non-text elements require 3:1 contrast ratio</span>
          </li>
        </ul>
      </div>
      <div className="surface-raised p-lg">
        <h4 className="text-h4 text-foreground mb-md">Focus Indicators</h4>
        <ul className="space-y-sm text-body-sm">
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>All interactive elements have visible focus states</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Focus rings use the accent color for consistency</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Focus indicators are not hidden or suppressed</span>
          </li>
        </ul>
      </div>
      <div className="surface-raised p-lg">
        <h4 className="text-h4 text-foreground mb-md">Typography</h4>
        <ul className="space-y-sm text-body-sm">
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Minimum body text size of 16px (1rem)</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Line height of at least 1.5 for body text</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Avoid text in images; use real text</span>
          </li>
        </ul>
      </div>
      <div className="surface-raised p-lg">
        <h4 className="text-h4 text-foreground mb-md">Touch Targets</h4>
        <ul className="space-y-sm text-body-sm">
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Minimum 44x44px touch target size</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Adequate spacing between interactive elements</span>
          </li>
          <li className="flex items-start gap-sm">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>Click areas extend beyond visible boundaries</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

/* ========== 11. USAGE EXAMPLES ========== */

const UsageExamplesSection = () => (
  <section>
    <SectionHeader 
      title="11. Usage Examples" 
      description="Live UI examples demonstrating correct application of the design system."
    />
    
    <div className="space-y-xl">
      {/* Card Layout Example */}
      <div>
        <p className="text-label text-foreground mb-md">Card Layout</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <Card>
            <CardHeader>
              <div className="mb-sm">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Work Visa</CardTitle>
              <CardDescription>Employment-based immigration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground">
                Apply for work authorization in the United States with our streamlined process.
              </p>
              <Button className="mt-md w-full">Apply Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-sm">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Family Visa</CardTitle>
              <CardDescription>Family-based immigration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground">
                Reunite with your loved ones through our family sponsorship program.
              </p>
              <Button className="mt-md w-full">Apply Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-sm">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Green Card</CardTitle>
              <CardDescription>Permanent residence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground">
                Obtain permanent residency status and build your future in America.
              </p>
              <Button className="mt-md w-full">Apply Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Form Section Example */}
      <div>
        <p className="text-label text-foreground mb-md">Form Section</p>
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Please provide your contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-md">
            <div className="grid grid-cols-2 gap-md">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" className="mt-xs" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="mt-xs" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-xs" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-xs" />
            </div>
            <div className="flex items-center space-x-sm">
              <Checkbox id="consent" />
              <Label htmlFor="consent" className="text-body-sm">I consent to being contacted about my application</Label>
            </div>
            <Button className="w-full">Submit Information</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* CTA Block Example */}
      <div>
        <p className="text-label text-foreground mb-md">Call to Action Block</p>
        <div className="bg-accent text-accent-foreground p-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-h2 text-accent-foreground">Ready to Start Your Immigration Journey?</h3>
            <p className="text-body-lg mt-sm opacity-90">
              Our expert team is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center mt-lg">
              <Button className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Example */}
      <div>
        <p className="text-label text-foreground mb-md">Table / List Example</p>
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Track the status of submitted applications</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-sm">APP-2024-001</TableCell>
                  <TableCell>Work Visa (H-1B)</TableCell>
                  <TableCell>Dec 15, 2024</TableCell>
                  <TableCell><Badge className="bg-primary/10 text-primary hover:bg-primary/20">In Review</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">APP-2024-002</TableCell>
                  <TableCell>Green Card (EB-2)</TableCell>
                  <TableCell>Dec 10, 2024</TableCell>
                  <TableCell><Badge className="bg-accent/10 text-accent hover:bg-accent/20">Processing</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">APP-2024-003</TableCell>
                  <TableCell>Family Visa (F-1)</TableCell>
                  <TableCell>Dec 5, 2024</TableCell>
                  <TableCell><Badge className="bg-muted text-foreground">Approved</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default DesignSystem;
