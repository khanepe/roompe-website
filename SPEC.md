# RoomPe Design System & Specification

## Theme: Claymorphism

**Concept**: A soft, friendly, and modern 3D UI (Claymorphism). It utilizes light pastel backgrounds, puffy components with layered shadows (both inset and drop shadows) to create a soft, extruded look.

### Color Palette

- **Background (Base)**: `#E8EAF6` (Soft Pastel Blue/Indigo) or `#F0F4F8` (Light grayish-blue)
- **Primary Elements**: `#FFFFFF` (White) for elements to pop out.
- **Accent 1**: `#9FA8DA` (Light Indigo) - Used for hover states and subtle highlights.
- **Accent 2**: `#F48FB1` (Pastel Pink) - Used for secondary accents/highlights.
- **Accent 3**: `#81D4FA` (Pastel Light Blue) - Used for primary action buttons.
- **Text Color (Primary)**: `#37474F` (Dark Blue/Grey) for readability.
- **Text Color (Secondary)**: `#78909C` (Lighter Blue/Grey).

### Typography

- **Headings**: `Inter` or system-ui, Bold, prominent sizes.
- **Body**: `Inter` or system-ui, Medium to Regular, relaxed line height.

### Shadows (Claymorphism Core)

Claymorphism uses a combination of an outer soft drop shadow and two inner shadows (one light on top/left, one dark on bottom/right) to give a pillowy, soft extruded effect.

- **Drop Shadow**: `10px 10px 20px rgba(0,0,0,0.05), -10px -10px 20px rgba(255,255,255,0.7)`
- **Inset Shadow (Light/Dark)**: `inset -5px -5px 10px rgba(0,0,0,0.05), inset 5px 5px 10px rgba(255,255,255,0.7)`
- **Border Radius**: Large rounded corners (e.g., `24px` to `40px` depending on element size).

### Animation

- Smooth scroll-triggered fade-ins and slide-ups using Framer Motion.
- Buttons and cards have a subtle scale down (`scale: 0.98`) on press.
- Floating animations for decorative elements.
