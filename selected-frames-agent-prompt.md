# Design Export Context

- Generated at: `2026-03-28T07:40:14.460Z`
- Document ID: `e4fa8387-5656-4afe-9869-575100a4d3fd`
- Page count: 10

## Original Prompt

```text
product name and logo is LakshyAI , 1. 🎯 Objective

Design a clean, modern AI career guidance app UI that:

Feels simple (30-sec onboarding)
Looks premium (startup-level)
Clearly shows AI-generated results
Supports students from school → PhD
2. 🧠 Design Principles
Minimal & clean UI
Card-based layout
Step-by-step flow (no clutter)
AI-first experience (focus on results)
Mobile-first design
3. 📱 Core Screens to Design
3.1 Splash Screen

Elements:

Logo (MargAI)
Tagline: “Your AI Career Guide”
Subtext: “Find your path in 30 seconds”
3.2 Onboarding (Multi-Step Form UI)
Step 1 – User Type
4 selectable cards:
Student
Working Professional
Career Switcher
Self-Learner
Step 2 – Experience Level
3 cards:
Beginner
Intermediate
Advanced
Step 3 – Interests
Multi-select chips:
Coding
Biology
Business
Design
Govt Jobs
Step 4 – Goal
Card selection:
Get Job
Switch Career
Learn Skill
Crack Exam
Step 5 – Basic Info
Input fields:
Name
Current class / role
3.3 Loading Screen
Animation / progress bar
Text: “AI is building your roadmap…”
3.4 Dashboard (Main Screen)

Sections (Card-based UI):

🎯 Career Suggestion Card
Title (e.g., Data Scientist)
Short description
🎓 Degree Path Card
Example:
B.Tech → M.Tech → PhD
🏫 College Suggestions Card
Top 3 colleges
“View More” button
🛣 Roadmap Card
Timeline (step-by-step)
📚 Recommended Courses (PW)
Course cards
CTA: “Start Learning”
3.5 Career Detail Screen
Title + image/icon
Skills required
Salary range
Future scope
3.6 Roadmap Screen
Vertical timeline UI:
Step 1: Foundation
Step 2: Intermediate
Step 3: Advanced
3.7 College List Screen
Filter UI:
Rank
Budget
Location
List cards
3.8 AI Chat Screen
Chat bubbles
Input bar
Suggested questions
3.9 Study Planner Screen
Daily task cards
Progress indicator
4. 🎨 UI Components (Design System)
Cards (rounded, shadow)
Chips (for interests)
Buttons (Primary CTA)
Progress bar
Timeline component
Bottom navigation bar
5. 🎯 Navigation Structure
Bottom Tabs:
Home
Roadmap
Colleges
Chat
Profile
6. 🎨 Style Guide
Colors:
Primary: Purple / Blue (AI feel)
Secondary: Light background
Typography:
Bold headings
Clean sans-serif
Icons:
Minimal line icons
7. ⚡ Key UX Focus
30-sec onboarding
Clear AI output (no confusion)
Visual roadmap (timeline)
Easy navigation
8. 🚀 MVP Design Scope

Design only:

Onboarding flow
Dashboard
Roadmap
```

## Theme (JSON)

```json
{
  "fonts": {
    "primary": "google:Plus Jakarta Sans",
    "secondary": "google:Inter"
  },
  "colors": {
    "light": {
      "primary": "#6366F1",
      "on_primary": "#FFFFFF",
      "secondary": "#4F46E5",
      "on_secondary": "#FFFFFF",
      "accent": "#8B5CF6",
      "background": "#F8FAFC",
      "surface": "#FFFFFF",
      "on_surface": "#1E293B",
      "primary_text": "#0F172A",
      "secondary_text": "#64748B",
      "hint": "#94A3B8",
      "error": "#EF4444",
      "on_error": "#FFFFFF",
      "success": "#10B981",
      "divider": "#E2E8F0",
      "transparent": "#00000000"
    },
    "dark": {
      "primary": "#818CF8",
      "on_primary": "#0F172A",
      "secondary": "#6366F1",
      "on_secondary": "#FFFFFF",
      "accent": "#A78BFA",
      "background": "#020617",
      "surface": "#0F172A",
      "on_surface": "#F1F5F9",
      "primary_text": "#F8FAFC",
      "secondary_text": "#94A3B8",
      "hint": "#475569",
      "error": "#F87171",
      "on_error": "#FFFFFF",
      "success": "#34D399",
      "divider": "#1E293B",
      "transparent": "#00000000"
    }
  },
  "text_styles": {
    "headline_large": {
      "font": "primary",
      "size": 32,
      "weight": 800,
      "height": 1.2
    },
    "headline_medium": {
      "font": "primary",
      "size": 26,
      "weight": 700,
      "height": 1.2
    },
    "title_large": {
      "font": "primary",
      "size": 20,
      "weight": 700,
      "height": 1.3
    },
    "title_medium": {
      "font": "primary",
      "size": 16,
      "weight": 600,
      "height": 1.4
    },
    "body_large": {
      "font": "secondary",
      "size": 16,
      "weight": 400,
      "height": 1.5
    },
    "body_medium": {
      "font": "secondary",
      "size": 14,
      "weight": 400,
      "height": 1.5
    },
    "body_small": {
      "font": "secondary",
      "size": 12,
      "weight": 400,
      "height": 1.4
    },
    "label_large": {
      "font": "primary",
      "size": 14,
      "weight": 600,
      "height": 1.3
    },
    "label_medium": {
      "font": "primary",
      "size": 12,
      "weight": 600,
      "height": 1.3
    },
    "label_small": {
      "font": "primary",
      "size": 10,
      "weight": 700,
      "height": 1.2
    }
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32
  },
  "radii": {
    "sm": 8,
    "md": 12,
    "lg": 24,
    "full": 9999
  },
  "shadows": {
    "sm": {
      "color": "#0000000D",
      "dx": 0,
      "dy": 1,
      "blur": 2,
      "spread": 0
    },
    "md": {
      "color": "#00000014",
      "dx": 0,
      "dy": 4,
      "blur": 6,
      "spread": -1
    },
    "lg": {
      "color": "#0000001A",
      "dx": 0,
      "dy": 10,
      "blur": 15,
      "spread": -3
    },
    "xl": {
      "color": "#00000026",
      "dx": 0,
      "dy": 20,
      "blur": 25,
      "spread": -5
    }
  }
}
```

## Pages

### 1. Splash Screen

- Frame ID: `8da3cf4d-e6b5-4e78-85c0-c58a4af1010b`
- Original page prompt: "A clean splash screen with the LakshyAI logo, tagline, and subtext."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "properties": {
          "align": {
            "align": {
              "named": "center"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 600,
                  "isInfinity": false
                }
              },
              "height": {
                "px": {
                  "value": 600,
                  "isInfinity": false
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "full"
                }
              },
              "bg": {
                "color": {
                  "color": "primary"
                }
              },
              "opacity": {
                "numberVal": {
                  "value": 0.05
                }
              },
              "blur": {
                "numberVal": {
                  "value": 80
                }
              },
              "align": {
                "align": {
                  "positional": {
                    "x": 0,
                    "y": 0
                  }
                }
              }
            },
            "editorId": "e82031ac-1df9-4b16-a118-d6530510451a"
          },
          {
            "type": "column",
            "properties": {
              "align": {
                "align": {
                  "named": "center"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "xl"
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "properties": {
                  "align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 140,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 140,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 40,
                          "topRight": 40,
                          "bottomLeft": 40,
                          "bottomRight": 40
                        }
                      },
                      "border": {
                        "border": {
                          "width": 2,
                          "color": "primary"
                        }
                      },
                      "opacity": {
                        "numberVal": {
                          "value": 0.2
                        }
                      }
                    },
                    "editorId": "6e689c94-e695-4d8b-82fe-f65653835216"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 100,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 100,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 32,
                          "topRight": 32,
                          "bottomLeft": 32,
                          "bottomRight": 32
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "primary"
                        }
                      },
                      "shadow": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "icon",
                        "properties": {
                          "name": {
                            "icon": {
                              "name": "psychology_rounded"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "#FFFFFF"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 56
                            }
                          }
                        },
                        "editorId": "a2477659-1095-4b6b-b2f8-617e893aec3b"
                      }
                    ],
                    "editorId": "29abd8eb-7981-4a5a-bb20-20e8964a2a56"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 12,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 12,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "full"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "accent"
                        }
                      },
                      "align": {
                        "align": {
                          "positional": {
                            "x": 1,
                            "y": -1
                          }
                        }
                      },
                      "shadow": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "editorId": "8b175df7-a0af-4be7-880a-4abe50701b31"
                  }
                ],
                "editorId": "74675613-9681-4f4c-af59-2c7b5145db15"
              },
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "md"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "LakshyAI"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "headline_large"
                        }
                      },
                      "font_size": {
                        "numberVal": {
                          "value": 48
                        }
                      },
                      "font_weight": {
                        "numberVal": {
                          "value": 800
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      }
                    },
                    "editorId": "b4493bb3-0443-41cd-a8bf-b2718e4ddb2e"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 8,
                          "right": 20,
                          "bottom": 8,
                          "left": 20
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "full"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Your AI Career Guide"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "on_surface"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          }
                        },
                        "editorId": "0a38e709-50a7-44d4-8486-50af20115ae2"
                      }
                    ],
                    "editorId": "26ba75bb-e0fb-4716-93c0-282f6ebeafc2"
                  }
                ],
                "editorId": "119cdb6b-52ab-4500-b195-fadb832178a2"
              },
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xs"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Find your path in 30 seconds"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_large"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "949b75a0-6f68-432a-b18b-a12714d07589"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "School • University • PhD"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "on_surface"
                        }
                      }
                    },
                    "editorId": "21f481ee-e0e1-4068-a3e8-53dc57a7075d"
                  }
                ],
                "editorId": "690d02e4-24e0-4118-b6bb-a65ee860edeb"
              },
              {
                "type": "sizedbox",
                "properties": {
                  "height": {
                    "px": {
                      "value": 40,
                      "isInfinity": false
                    }
                  }
                },
                "editorId": "e737f3b9-30db-4325-a3f7-f00ece42d99b"
              },
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 200,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 6,
                          "isInfinity": false
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "full"
                        }
                      },
                      "clip": {
                        "boolVal": {
                          "value": true
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 80,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 6,
                              "isInfinity": false
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "full"
                            }
                          },
                          "align": {
                            "align": {
                              "positional": {
                                "x": -1,
                                "y": 0
                              }
                            }
                          }
                        },
                        "editorId": "2c371f8e-395d-412c-8556-a5990e263a7a"
                      }
                    ],
                    "editorId": "ce500ca3-6ae2-4170-b657-fa4d4fa9eb3d"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Initializing AI Mentor..."
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "bd51c979-7a12-4b05-952b-110b3f557a32"
                  }
                ],
                "editorId": "bcb3b57f-82b8-4970-bef0-ec62b2b842b9"
              }
            ],
            "editorId": "edba1b56-eb16-493a-8f66-d7c5ad22c036"
          },
          {
            "type": "container",
            "properties": {
              "align_y": {
                "numberVal": {
                  "value": 0.9
                }
              },
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 40,
                  "bottom": 0,
                  "left": 40
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "@std.button",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Get Started"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "primary"
                        }
                      },
                      "size": {
                        "stringVal": {
                          "value": "large"
                        }
                      },
                      "full_width": {
                        "boolVal": {
                          "value": false
                        }
                      },
                      "icon": {
                        "stringVal": {
                          "value": "arrow_forward_rounded"
                        }
                      }
                    },
                    "editorId": "5acdc01a-ffca-4630-940a-c49ee923f076"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "center"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Powered by"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "on_surface"
                            }
                          }
                        },
                        "editorId": "84bdbf06-583f-4ef6-bc68-3f20ae46491d"
                      },
                      {
                        "type": "logo_icon",
                        "properties": {
                          "name": {
                            "icon": {
                              "name": "google"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 14
                            }
                          },
                          "color": {
                            "color": {
                              "color": "hint"
                            }
                          }
                        },
                        "editorId": "084cb8f3-f2f3-4cd8-a50d-ec2345258107"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Vertex AI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "on_surface"
                            }
                          },
                          "font_weight": {
                            "stringVal": {
                              "value": "bold"
                            }
                          }
                        },
                        "editorId": "072c98cc-91c5-4735-aa17-a4892caf5cff"
                      }
                    ],
                    "editorId": "3a79992c-6545-4285-9203-e3bda2fa1023"
                  }
                ],
                "editorId": "f10fcf90-1b3a-442e-891f-00db363ad416"
              }
            ],
            "editorId": "d86e7fc0-1654-40b9-9ef5-328e59a76602"
          }
        ],
        "editorId": "f9795559-e690-4fed-98f8-6707d9cc43a3"
      }
    ],
    "editorId": "5a81c26e-471a-443c-8c29-a2d97830db35"
  }
}
```

### 2. Onboarding - User Type

- Frame ID: `41e68507-30d3-416d-b725-9f791e18c178`
- Original page prompt: "Step 1 of onboarding featuring four selectable cards for Student, Professional, Career Switcher, and Self-Learner."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "column",
        "properties": {
          "scroll": {
            "boolVal": {
              "value": true
            }
          },
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "topToken": "xl",
                  "rightToken": "lg",
                  "bottomToken": "xl",
                  "leftToken": "lg"
                }
              },
              "border": {
                "borderSided": {
                  "side": "bottom",
                  "width": 1,
                  "color": "divider"
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "f93e7f4e-a3f9-4cde-a502-40cfc5b4881e"
                          }
                        ],
                        "editorId": "ecf9415f-dce8-42e7-a863-4217fd14797e"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 800
                            }
                          }
                        },
                        "editorId": "67bc1381-999d-4c05-a86c-dd26397305be"
                      }
                    ],
                    "editorId": "4d915864-c13c-4d06-962f-4296027f6681"
                  },
                  {
                    "type": "@step_indicator",
                    "properties": {
                      "color1": {
                        "stringVal": {
                          "value": "primary"
                        }
                      },
                      "color2": {
                        "stringVal": {
                          "value": "divider"
                        }
                      }
                    },
                    "editorId": "43c4286d-a5ec-42c8-aaea-375451046bff"
                  },
                  {
                    "type": "@std.button",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Skip for now"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "ghost"
                        }
                      },
                      "color": {
                        "stringVal": {
                          "value": "secondary_text"
                        }
                      }
                    },
                    "editorId": "192a091c-b3da-4bc3-a1c3-b166e667d624"
                  }
                ],
                "editorId": "073abe84-eb29-49ef-a13e-cfb1a901bf7a"
              }
            ],
            "editorId": "4d311e7e-bd46-4d0f-924e-66dd86befd5d"
          },
          {
            "type": "container",
            "properties": {
              "padding": {
                "edgeInsets": {
                  "top": 60,
                  "right": 0,
                  "bottom": 60,
                  "left": 0
                }
              },
              "align_child": {
                "align": {
                  "named": "center"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "max_width": {
                    "px": {
                      "value": 1000,
                      "isInfinity": false
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Let's find your path"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_large"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 800
                            }
                          }
                        },
                        "editorId": "7c7db24a-c9b5-4cfa-99f0-50925ad507f5"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Select the profile that best describes your current situation"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "secondary_text"
                            }
                          }
                        },
                        "editorId": "44b0c571-485d-4713-9411-d91d94c4d557"
                      }
                    ],
                    "editorId": "b090d013-6ff0-4a95-85fd-de4ce1cab161"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@user_type_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "school_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Student"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "High school, UG, or PG student looking for direction"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "41e5ecae-0745-491e-9cc8-8aea95357910"
                          },
                          {
                            "type": "@user_type_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "work_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Professional"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Early to mid-career looking to grow in current field"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "e18a23ef-204b-4158-a1a8-3b6ea89a4588"
                          }
                        ],
                        "editorId": "35289f1a-8654-4d7a-84fe-1c9e784b3e09"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@user_type_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "swap_horiz_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Career Switcher"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Ready to transition into a completely new industry"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "6ec7f090-aeac-4ff1-81d3-a9e40aaf73a4"
                          },
                          {
                            "type": "@user_type_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "self_improvement_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Self-Learner"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Lifelong learner exploring skills independently"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "4f842de9-7e25-493f-a5c6-3cb22de062df"
                          }
                        ],
                        "editorId": "02a163cf-0be4-4f32-be5c-0e08f545a952"
                      }
                    ],
                    "editorId": "66bdf6a2-3bd2-499d-886a-bf4469852900"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "margin": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "topToken": "top",
                          "rightToken": "xl",
                          "bottomToken": "top",
                          "leftToken": "xl"
                        }
                      },
                      "width": {
                        "px": {
                          "value": 400,
                          "isInfinity": false
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Continue to Experience Level"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "primary"
                                }
                              },
                              "size": {
                                "stringVal": {
                                  "value": "large"
                                }
                              },
                              "icon_end": {
                                "stringVal": {
                                  "value": "arrow_forward_rounded"
                                }
                              },
                              "full_width": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "1787ce72-f537-46a9-970c-879cb0fd6dce"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Step 1 of 5 • Takes about 30 seconds"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "label_small"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              },
                              "text_align": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "editorId": "a2351b5e-549e-4bab-832a-0a2c4fa7b6dc"
                          }
                        ],
                        "editorId": "9ec0d037-7da5-4c6a-8fc9-9e8fc8b881c3"
                      }
                    ],
                    "editorId": "e5f25f0d-ecfa-44bb-aaf7-d4171c3203dc"
                  }
                ],
                "editorId": "44f91e8f-673d-4121-8a38-5241d65673c5"
              }
            ],
            "editorId": "d235b786-ee00-4a30-93d6-b05b97486695"
          },
          {
            "type": "stack",
            "properties": {
              "height": {
                "px": {
                  "value": 200,
                  "isInfinity": false
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "align": {
                    "align": {
                      "named": "bottom_center"
                    }
                  },
                  "width": {
                    "px": {
                      "value": "Infinity",
                      "isInfinity": true
                    }
                  },
                  "height": {
                    "px": {
                      "value": 200,
                      "isInfinity": false
                    }
                  },
                  "gradient": {
                    "gradient": {
                      "type": "GRADIENT_TYPE_LINEAR",
                      "direction": "to_top",
                      "stops": [
                        {
                          "color": "transparent"
                        },
                        {
                          "color": "background"
                        }
                      ]
                    }
                  }
                },
                "editorId": "cf0c6828-6118-45de-b834-bcf6a370f604"
              },
              {
                "type": "container",
                "properties": {
                  "align": {
                    "align": {
                      "named": "bottom_left"
                    }
                  },
                  "width": {
                    "px": {
                      "value": 300,
                      "isInfinity": false
                    }
                  },
                  "height": {
                    "px": {
                      "value": 300,
                      "isInfinity": false
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "full"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "primary"
                    }
                  },
                  "opacity": {
                    "numberVal": {
                      "value": 0.03
                    }
                  },
                  "blur": {
                    "numberVal": {
                      "value": 80
                    }
                  }
                },
                "editorId": "f5d87c31-54ab-483c-97bf-f83f5014a7d2"
              },
              {
                "type": "container",
                "properties": {
                  "align": {
                    "align": {
                      "named": "bottom_right"
                    }
                  },
                  "width": {
                    "px": {
                      "value": 400,
                      "isInfinity": false
                    }
                  },
                  "height": {
                    "px": {
                      "value": 400,
                      "isInfinity": false
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "full"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "accent"
                    }
                  },
                  "opacity": {
                    "numberVal": {
                      "value": 0.03
                    }
                  },
                  "blur": {
                    "numberVal": {
                      "value": 100
                    }
                  }
                },
                "editorId": "f2bb5469-7964-4767-bb36-677c86473de0"
              }
            ],
            "editorId": "234b279b-3b50-4d78-a858-ddc20a3aeebc"
          }
        ],
        "editorId": "856a7c81-5cc1-4c9b-82fc-7664f04a115f"
      }
    ],
    "editorId": "a52d9ea2-2727-4b04-9ed1-c4b2d8777e82"
  }
}
```

### 3. Onboarding - Preferences

- Frame ID: `6d3f8ced-5008-42fc-99f5-eedc71730ba7`
- Original page prompt: "Multi-step form for experience level, interest chips, and career goals."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "column",
        "properties": {
          "cross_align": {
            "align": {
              "named": "center"
            }
          },
          "spacing": {
            "stringVal": {
              "value": "xl"
            }
          },
          "padding": {
            "edgeInsets": {
              "top": 40,
              "right": 0,
              "bottom": 40,
              "left": 0
            }
          },
          "scroll": {
            "boolVal": {
              "value": false
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              },
              "cross_align": {
                "align": {
                  "named": "center"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "md"
                    }
                  },
                  "align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 48,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 48,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "primary"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "icon",
                        "properties": {
                          "name": {
                            "icon": {
                              "name": "psychology_rounded"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "#FFFFFF"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 28
                            }
                          }
                        },
                        "editorId": "f1872d25-408e-44da-9552-63b2bf24ffcc"
                      }
                    ],
                    "editorId": "9d86c9e0-6a84-4389-819d-f86b98c84df6"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "LakshyAI"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "headline_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "font_weight": {
                        "numberVal": {
                          "value": 800
                        }
                      }
                    },
                    "editorId": "57282ae1-f483-4201-a4ea-60d9a4106c36"
                  }
                ],
                "editorId": "d1b55e66-452f-443c-b2e1-ca8a9bb9e79a"
              },
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xs"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Personalize Your Path"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "headline_large"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      }
                    },
                    "editorId": "a8045688-b3fa-4407-8679-69176dc31a92"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Step 2 of 4: Experience & Interests"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_large"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "6ccf8efe-da51-4635-ab7c-9ac608cce70a"
                  }
                ],
                "editorId": "b57df929-c9bd-4c05-97a3-2619ae73e457"
              }
            ],
            "editorId": "115717f8-5d82-4163-af30-abb39ee313d0"
          },
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "sm"
                }
              },
              "align": {
                "align": {
                  "named": "center"
                }
              }
            },
            "children": [
              {
                "type": "@step_indicator__ffc1a3d0",
                "properties": {
                  "active": {
                    "boolVal": {
                      "value": false
                    }
                  }
                },
                "editorId": "dc2cdb8c-9461-4b92-9de7-b569b20e27cf"
              },
              {
                "type": "@step_indicator__ffc1a3d0",
                "properties": {
                  "active": {
                    "boolVal": {
                      "value": true
                    }
                  }
                },
                "editorId": "24addfe3-fc9e-4983-94bc-e20671527eea"
              },
              {
                "type": "@step_indicator__ffc1a3d0",
                "properties": {
                  "active": {
                    "boolVal": {
                      "value": false
                    }
                  }
                },
                "editorId": "91ce8053-1f2b-472a-bd0b-6d5691912268"
              },
              {
                "type": "@step_indicator__ffc1a3d0",
                "properties": {
                  "active": {
                    "boolVal": {
                      "value": false
                    }
                  }
                },
                "editorId": "f2a6ab0f-b4f3-4a2c-8a3c-f1b3184d6c24"
              }
            ],
            "editorId": "2b5f39a3-58ca-4289-955e-d4c053b6a4ba"
          },
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 800,
                  "isInfinity": false
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 20,
                  "bottom": 0,
                  "left": 20
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "What is your current experience level?"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_large"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          }
                        },
                        "editorId": "656fd743-6571-4756-b7a3-4351a78e3bcb"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@select_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "school_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Beginner"
                                }
                              },
                              "desc": {
                                "stringVal": {
                                  "value": "Starting from scratch or just exploring."
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "52f3c095-b78d-4c2a-9c3e-63d3c8fba030"
                          },
                          {
                            "type": "@select_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Intermediate"
                                }
                              },
                              "desc": {
                                "stringVal": {
                                  "value": "Have some basic knowledge and projects."
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "87e0085b-f4f8-4230-a5a8-7d4399a83079"
                          },
                          {
                            "type": "@select_card",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "workspace_premium_rounded"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Advanced"
                                }
                              },
                              "desc": {
                                "stringVal": {
                                  "value": "Deep expertise looking for specialization."
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "f817b964-a447-4979-9a67-edd3d8e22bff"
                          }
                        ],
                        "editorId": "902732aa-c1b0-4b75-a391-db8d8f99e1c9"
                      }
                    ],
                    "editorId": "848d81a9-4b62-4127-bb81-58524ed069f6"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "What are you passionate about?"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 600
                                }
                              }
                            },
                            "editorId": "02c6f53c-a4d2-4d96-96c2-dd543702235a"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Select all that apply to help our AI narrow down your roadmap."
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "body_medium"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "9d5cbb9c-5fc1-4328-8d64-70215515d48e"
                          }
                        ],
                        "editorId": "811982e1-d626-4124-bf58-5ff06d97fae5"
                      },
                      {
                        "type": "wrap",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "run_spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "code_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Coding & Development"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "7b601fdc-33fa-43a9-a82f-a7bb4c724c30"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "brush_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "UI/UX Design"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "c7d77968-4501-4236-8129-404ba6a17819"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "payments_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Business & Finance"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "027e03fc-9726-4026-a1d1-e29ff9796506"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "science_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Biology & Med"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "eb47098d-118c-4b29-bdcc-bc959e6dfe03"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "account_balance_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Govt. Exams"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "af477ff6-a854-403f-8ff6-fb810af0995f"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "psychology_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Data Science"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "77f50048-17ab-46d0-832c-8c0da7812a12"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "campaign_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Digital Marketing"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "dd1a516e-5f69-44bf-a52f-865bdf3a1266"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "language_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Foreign Languages"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "0d5eb734-391c-4124-b287-2d205469ac8a"
                          },
                          {
                            "type": "@interest_chip",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "smart_toy_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Robotics & AI"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "d2f68bd4-0a79-4b8b-93ec-25c797e5c9f2"
                          }
                        ],
                        "editorId": "45c32a2e-83a8-4830-b65d-df5c8712cc53"
                      }
                    ],
                    "editorId": "b752b3b7-9d85-42a8-828c-482251f54893"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "What is your primary goal?"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_large"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          }
                        },
                        "editorId": "a1691eca-fac3-45e4-8ce7-0118ab4b2669"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "bg": {
                            "color": {
                              "color": "surface"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "border": {
                            "border": {
                              "width": 1,
                              "color": "divider"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "numberVal": {
                                  "value": 0
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "md"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "rocket_launch_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "on_surface"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 24
                                        }
                                      }
                                    },
                                    "editorId": "0b06e53b-9046-4bd3-a33c-1b1b7623d51e"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Get a High-Paying Job"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "6d099cf3-65a0-4c19-8ab6-9de5b98479f1"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Focus on industry-ready skills and portfolios."
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "03a17b3c-4a62-48f1-b671-b8c90db01f5a"
                                          }
                                        ],
                                        "editorId": "dbce9542-ce7a-4711-babc-a789d38850df"
                                      }
                                    ],
                                    "editorId": "9734883d-f6c1-4302-bae7-5ad9a0a02879"
                                  },
                                  {
                                    "type": "radio",
                                    "properties": {
                                      "value": {
                                        "stringVal": {
                                          "value": "job"
                                        }
                                      },
                                      "selected": {
                                        "boolVal": {
                                          "value": true
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      }
                                    },
                                    "editorId": "f07acac7-07c6-4e6f-a1cb-0c40dfff17ed"
                                  }
                                ],
                                "editorId": "8062c56b-8d97-4310-ac8d-af9965b8b813"
                              },
                              {
                                "type": "divider",
                                "properties": {
                                  "color": {
                                    "color": {
                                      "color": "divider"
                                    }
                                  }
                                },
                                "editorId": "7e0fbbe5-8f2d-4abe-95a8-ac874c512fc5"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "md"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "swap_horiz_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 24
                                        }
                                      }
                                    },
                                    "editorId": "9cc6e070-8fa2-48c7-98be-1c65d4e3e41e"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Switch Career Path"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "f0abc2cd-b7d3-42a7-abcf-581f65e7b87b"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Leverage existing skills for a new industry."
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "677925ff-8b99-44fb-b51f-4fcf0b405331"
                                          }
                                        ],
                                        "editorId": "491bf42a-98b2-49f5-89e6-f25a52d0326d"
                                      }
                                    ],
                                    "editorId": "26bea519-0994-4164-a305-80276e85cb06"
                                  },
                                  {
                                    "type": "radio",
                                    "properties": {
                                      "value": {
                                        "stringVal": {
                                          "value": "switch"
                                        }
                                      },
                                      "selected": {
                                        "boolVal": {
                                          "value": false
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      }
                                    },
                                    "editorId": "53249bfd-b53d-48ce-85fa-887d27841f2b"
                                  }
                                ],
                                "editorId": "4b407a9b-5355-4b3a-96f3-a12e3a4b6b6b"
                              },
                              {
                                "type": "divider",
                                "properties": {
                                  "color": {
                                    "color": {
                                      "color": "divider"
                                    }
                                  }
                                },
                                "editorId": "f6f48ade-f692-4b5e-93d9-8a5358c0232d"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "md"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "history_edu_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 24
                                        }
                                      }
                                    },
                                    "editorId": "868d0740-8733-438a-9689-b2dc3ae3e4c0"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Crack Competitive Exams"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "3bdd554f-eaa0-4925-a527-0bdb3ba13340"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Structured study plans for top certifications."
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "18ee68a7-bc0e-45bc-8a7b-f7f843c4000f"
                                          }
                                        ],
                                        "editorId": "85603343-ecbf-4ccf-a48e-ea74081217dd"
                                      }
                                    ],
                                    "editorId": "598aafc3-e9e6-48d9-9364-f30bdc4ac372"
                                  },
                                  {
                                    "type": "radio",
                                    "properties": {
                                      "value": {
                                        "stringVal": {
                                          "value": "exam"
                                        }
                                      },
                                      "selected": {
                                        "boolVal": {
                                          "value": false
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      }
                                    },
                                    "editorId": "b003daf3-395d-4c4a-a81f-e14c350944b7"
                                  }
                                ],
                                "editorId": "4c8f53e0-f218-43ce-aa76-becfdf05ded5"
                              }
                            ],
                            "editorId": "ac3c78ac-39f0-4a12-b8f5-5e6450468f24"
                          }
                        ],
                        "editorId": "492ff0a3-da6b-47a5-bbb2-25ca4222deb6"
                      }
                    ],
                    "editorId": "fae5dcd6-3520-42f6-88b4-67f79e9a6789"
                  }
                ],
                "editorId": "b8ea6143-5348-485e-b0e4-2bdc3db00061"
              }
            ],
            "editorId": "6d0a4d43-f96f-48c2-b650-835aaf822aac"
          },
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 800,
                  "isInfinity": false
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 40,
                  "right": 20,
                  "bottom": 40,
                  "left": 20
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "@std.button",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Back"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "ghost"
                        }
                      },
                      "icon": {
                        "stringVal": {
                          "value": "arrow_back_rounded"
                        }
                      },
                      "size": {
                        "stringVal": {
                          "value": "large"
                        }
                      }
                    },
                    "editorId": "74dfd641-0567-48e2-900c-739be967e7bc"
                  },
                  {
                    "type": "@std.button",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "Continue to Goals"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "primary"
                        }
                      },
                      "icon_end": {
                        "stringVal": {
                          "value": "arrow_forward_rounded"
                        }
                      },
                      "size": {
                        "stringVal": {
                          "value": "large"
                        }
                      }
                    },
                    "editorId": "279969ec-aad7-4778-89de-cb4e89019d15"
                  }
                ],
                "editorId": "9f973187-dc46-4d14-8061-96b17a26304b"
              }
            ],
            "editorId": "bbc20bd7-20c0-498f-9b82-d345f5f23078"
          }
        ],
        "editorId": "0369837a-c572-4f43-bca0-e9522b76a631"
      }
    ],
    "editorId": "62ed9b43-de22-4877-a135-8abb21359a14"
  }
}
```

### 4. Onboarding - Basic Info

- Frame ID: `440f0fef-3110-4064-8d59-da20cd8dc59d`
- Original page prompt: "Final onboarding step with input fields for name and current role or class."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "top_right"
                        }
                      },
                      "width": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "primary/10"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "margin": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        }
                      }
                    },
                    "editorId": "c302d449-cc9c-40df-bf8e-3f7624e5d2cb"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "bottom_left"
                        }
                      },
                      "width": {
                        "px": {
                          "value": 400,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 400,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "accent/10"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "margin": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0
                        }
                      }
                    },
                    "editorId": "900f7cfe-9b39-4728-b848-c6177a59d1ff"
                  }
                ],
                "editorId": "ae266a07-81b0-4796-b686-4aa25dce4eac"
              }
            ],
            "editorId": "24ac8f63-87ef-4ae6-b4b8-e0b906d25802"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 1
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 60,
                          "bottom": 0,
                          "left": 60,
                          "topToken": "xl",
                          "bottomToken": "xl"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xl"
                            }
                          },
                          "main_size": {
                            "stringVal": {
                              "value": "min"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "width": {
                                    "px": {
                                      "value": 48,
                                      "isInfinity": false
                                    }
                                  },
                                  "height": {
                                    "px": {
                                      "value": 48,
                                      "isInfinity": false
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "primary"
                                    }
                                  },
                                  "align_child": {
                                    "align": {
                                      "named": "center"
                                    }
                                  },
                                  "shadow": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "psychology_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "#FFFFFF"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 28
                                        }
                                      }
                                    },
                                    "editorId": "462ef898-0a11-4ce6-b3ed-e6dbb6ddb478"
                                  }
                                ],
                                "editorId": "84a9053c-0574-486f-bc33-2a0830bd6091"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "LakshyAI"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 800
                                    }
                                  }
                                },
                                "editorId": "42c85a67-52f0-4dfd-84e2-6969b3ac8ebe"
                              }
                            ],
                            "editorId": "749007a3-cbf8-4239-bc83-e03643cf978e"
                          },
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "The final piece of the puzzle."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_large"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 800
                                    }
                                  }
                                },
                                "editorId": "282b8f21-3d08-406c-af51-46bf8253c613"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "We just need a few basic details to personalize your AI-generated career roadmap and matching institutions."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_large"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  },
                                  "max_lines": {
                                    "numberVal": {
                                      "value": 3
                                    }
                                  },
                                  "overflow": {
                                    "stringVal": {
                                      "value": "ellipsis"
                                    }
                                  }
                                },
                                "editorId": "4e3f464f-5a19-4e03-82b4-88063d0114a3"
                              }
                            ],
                            "editorId": "b105dda0-2e7e-4749-bec8-a320006b0c2e"
                          },
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@step_indicator__86384e20",
                                "properties": {
                                  "active": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  }
                                },
                                "editorId": "03e3718e-26b0-452d-8adf-8974a8f41363"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Step 5 of 5: Finalizing Profile"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "label_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "on_surface"
                                    }
                                  }
                                },
                                "editorId": "fdec0d7c-0e57-4c7c-9d92-919b003e639a"
                              }
                            ],
                            "editorId": "45a7d6a5-789e-4f7f-a0ef-ab80754fd9d7"
                          },
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface",
                                  "opacityPercent": 50
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "md"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "security_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "on_surface"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 20
                                        }
                                      }
                                    },
                                    "editorId": "fdf7e9c1-3dcd-4218-b3b8-05c872970d41"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Your data is used only for career matching."
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "987e8efa-afcf-4b8e-99b9-ef1ab44d1af0"
                                  }
                                ],
                                "editorId": "5d9bf6ff-731a-45bb-89c4-454baa64032d"
                              }
                            ],
                            "editorId": "3e39ecbe-74dc-4f41-bb0a-09283a4b7c56"
                          }
                        ],
                        "editorId": "c11d33d0-2b64-4a30-a0c6-eef66c05a15b"
                      }
                    ],
                    "editorId": "a4bff3aa-9858-4792-b472-81f468abb2f9"
                  }
                ],
                "editorId": "655f25a8-8d58-44d9-a8b4-4090b34b73c9"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 1
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "main_size": {
                            "stringVal": {
                              "value": "min"
                            }
                          },
                          "max_width": {
                            "px": {
                              "value": 500,
                              "isInfinity": false
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@info_input_card",
                            "properties": {
                              "title": {
                                "stringVal": {
                                  "value": "Tell us about yourself"
                                }
                              },
                              "subtitle": {
                                "stringVal": {
                                  "value": "This helps LakshyAI tailor suggestions to your current academic or professional level."
                                }
                              }
                            },
                            "editorId": "75b21a1c-be28-4364-9429-ffca7f75fd22"
                          },
                          {
                            "type": "container",
                            "properties": {
                              "margin": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "top",
                                  "rightToken": "lg",
                                  "bottomToken": "top",
                                  "leftToken": "lg"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "align": {
                                    "align": {
                                      "named": "center"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@std.button",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Privacy Policy"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "ghost"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "small"
                                        }
                                      }
                                    },
                                    "editorId": "bd1c1b27-3a8a-4528-a937-c6b8022c43fd"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 4,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 4,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "full"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "divider"
                                        }
                                      }
                                    },
                                    "editorId": "c2dc7ddd-4a7f-4b2f-a47d-c637e44370c3"
                                  },
                                  {
                                    "type": "@std.button",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Terms of Service"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "ghost"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "small"
                                        }
                                      }
                                    },
                                    "editorId": "e995b7dd-010e-44eb-800e-a2b7e9caeed2"
                                  }
                                ],
                                "editorId": "7ef707ca-b3dc-4964-8e9b-4b80a8006365"
                              }
                            ],
                            "editorId": "3faa8a9f-8817-43d5-9491-74a4642822a7"
                          }
                        ],
                        "editorId": "fda22571-5089-40f9-b015-6d659931b52c"
                      }
                    ],
                    "editorId": "44e29fc7-9fed-4ce2-9f9d-7eb09605da3f"
                  }
                ],
                "editorId": "37fc69de-0762-49b5-b6b0-89c3d997d853"
              }
            ],
            "editorId": "8760ecd7-e2cb-4391-b674-5d722a053e62"
          },
          {
            "type": "container",
            "properties": {
              "align": {
                "align": {
                  "named": "top_left"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "xl"
                }
              }
            },
            "children": [
              {
                "type": "iconbutton",
                "properties": {
                  "name": {
                    "icon": {
                      "name": "arrow_back_ios_new_rounded"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "surface"
                    }
                  },
                  "shadow": {
                    "stringVal": {
                      "value": "sm"
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "md"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  }
                },
                "editorId": "70b47a3d-68b4-4c34-ad0c-e221fe2f078a"
              }
            ],
            "editorId": "0c02516d-b9f1-4c8d-950e-13aa5e38058a"
          }
        ],
        "editorId": "52cb4624-1403-4833-be9e-ccb246ec064c"
      }
    ],
    "editorId": "7cd0bf87-101e-429b-bda6-c4fb17653ba0"
  }
}
```

### 5. AI Loading Screen

- Frame ID: `01aa36fc-1381-4876-ab6e-537d7dcfe4cb`
- Original page prompt: "A progress animation screen with the text 'AI is building your roadmap...'"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "properties": {
          "align": {
            "align": {
              "named": "center"
            }
          }
        },
        "children": [
          {
            "type": "stack",
            "properties": {
              "fit": {
                "stringVal": {
                  "value": "expand"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "align": {
                    "align": {
                      "positional": {
                        "x": -0.8,
                        "y": -0.5
                      }
                    }
                  },
                  "width": {
                    "px": {
                      "value": 300,
                      "isInfinity": false
                    }
                  },
                  "height": {
                    "px": {
                      "value": 300,
                      "isInfinity": false
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "full"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "primary"
                    }
                  },
                  "opacity": {
                    "numberVal": {
                      "value": 0.05
                    }
                  },
                  "blur": {
                    "numberVal": {
                      "value": 80
                    }
                  }
                },
                "editorId": "2424a62a-ead1-4823-af72-3b4844ecaa44"
              },
              {
                "type": "container",
                "properties": {
                  "align": {
                    "align": {
                      "positional": {
                        "x": 0.8,
                        "y": 0.6
                      }
                    }
                  },
                  "width": {
                    "px": {
                      "value": 400,
                      "isInfinity": false
                    }
                  },
                  "height": {
                    "px": {
                      "value": 400,
                      "isInfinity": false
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "full"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "accent"
                    }
                  },
                  "opacity": {
                    "numberVal": {
                      "value": 0.05
                    }
                  },
                  "blur": {
                    "numberVal": {
                      "value": 100
                    }
                  }
                },
                "editorId": "17cc2cf3-e055-4859-9b39-17d73ff1f6c1"
              }
            ],
            "editorId": "4204245c-3f86-4d9f-95e6-498dab633ca2"
          },
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 500,
                  "isInfinity": false
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "xl"
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "xl"
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "shadow": {
                "stringVal": {
                  "value": "xl"
                }
              },
              "border": {
                "border": {
                  "width": 1,
                  "color": "divider"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      },
                      "align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 48,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 48,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          },
                          "shadow": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 28
                                }
                              }
                            },
                            "editorId": "1ad5c9fd-f8cd-4e97-bb52-e996d912a8e7"
                          }
                        ],
                        "editorId": "c74622b1-9df5-4fe7-8906-8b5119c5410c"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "stringVal": {
                              "value": "bold"
                            }
                          }
                        },
                        "editorId": "55631758-34c5-4ec3-860c-496a4d5fd4fd"
                      }
                    ],
                    "editorId": "05c0a456-2a94-4e04-9960-2085b5669dd5"
                  },
                  {
                    "type": "stack",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 180,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 180,
                              "isInfinity": false
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "progress",
                            "properties": {
                              "variant": {
                                "stringVal": {
                                  "value": "circular"
                                }
                              },
                              "value": {
                                "numberVal": {
                                  "value": 0.65
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 160
                                }
                              },
                              "thickness": {
                                "numberVal": {
                                  "value": 12
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary"
                                }
                              },
                              "bg_color": {
                                "color": {
                                  "color": "background"
                                }
                              }
                            },
                            "editorId": "0670f9c3-dc17-4aa3-b983-741b05e2a445"
                          }
                        ],
                        "editorId": "b54551b7-53bb-4345-bb64-6d45cdcff46a"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "align": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "65%"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "headline_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              }
                            },
                            "editorId": "f940fe33-5ac9-4dd8-8036-4f4cc879bd7d"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Processing"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "label_small"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "09bfc495-3812-47e2-9ea7-aba9f393aaca"
                          }
                        ],
                        "editorId": "bd4af5f2-c646-4d1e-b02a-3b6a549bd49c"
                      }
                    ],
                    "editorId": "9f200c9f-0b97-4ef1-837a-e866ad8ce546"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "AI is building your roadmap..."
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_large"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          }
                        },
                        "editorId": "65231910-7ea5-4dc2-90a5-8029afceeb03"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Analyzing 10k+ career paths to find your perfect fit"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "body_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "secondary_text"
                            }
                          },
                          "text_align": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "editorId": "a0b615b5-8988-42d9-86f8-2c9760735ea2"
                      }
                    ],
                    "editorId": "227d6f52-4d67-40db-81cf-5889361550bb"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "background"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "lg"
                        }
                      },
                      "width": {
                        "px": {
                          "value": "Infinity",
                          "isInfinity": true
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@loading_step",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "check_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Analyzing interests & skills"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "opacity": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "editorId": "048c15fd-87bb-48f9-a074-4fee03a92a02"
                          },
                          {
                            "type": "@loading_step",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "check_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Matching with market trends"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "opacity": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "editorId": "acaa6f20-7fa1-47aa-bfba-4c0357feb559"
                          },
                          {
                            "type": "@loading_step",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Generating degree & college paths"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "opacity": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "editorId": "19067ed6-c4fe-426c-9f54-7424abf34c4c"
                          },
                          {
                            "type": "@loading_step",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "hourglass_empty_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Finalizing your personalized roadmap"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              },
                              "opacity": {
                                "numberVal": {
                                  "value": 0.5
                                }
                              }
                            },
                            "editorId": "a4f8871a-db8b-4afe-bc19-b9e827c45eb7"
                          }
                        ],
                        "editorId": "a36bc8dc-88d6-4ef1-8647-9d59e549b242"
                      }
                    ],
                    "editorId": "2570445b-02f1-4d30-91c2-bbec40f15a39"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "md"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "lightbulb_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 20
                                }
                              }
                            },
                            "editorId": "0d88aedb-0b3e-449e-bc20-b4efd409f8a8"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Did you know? Data Science roles have grown 480% since 2016."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_small"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  },
                                  "max_lines": {
                                    "numberVal": {
                                      "value": 2
                                    }
                                  },
                                  "overflow": {
                                    "stringVal": {
                                      "value": "ellipsis"
                                    }
                                  }
                                },
                                "editorId": "613008a8-4797-4673-9e35-294d7f45af2b"
                              }
                            ],
                            "editorId": "0a42fdcb-bd5f-4d20-adc6-8aa638493417"
                          }
                        ],
                        "editorId": "d6bb82c6-3239-447d-b361-b9e816952b73"
                      }
                    ],
                    "editorId": "7c7045f8-afad-44b9-ac74-7a22e60aae9d"
                  }
                ],
                "editorId": "53a0f4da-5a1d-4a46-8f34-dc7dfdac665a"
              }
            ],
            "editorId": "6dee54b6-2cc6-420d-af3a-6fef3c1e8a4b"
          },
          {
            "type": "container",
            "properties": {
              "align_y": {
                "numberVal": {
                  "value": 0.9
                }
              },
              "width": {
                "px": {
                  "value": 600,
                  "isInfinity": false
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xs"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "“The best way to predict the future is to create it.”"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "title_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      },
                      "font_style": {
                        "stringVal": {
                          "value": "italic"
                        }
                      }
                    },
                    "editorId": "5c9702c7-e4ea-432a-bcf5-3e974443aedd"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "stringVal": {
                          "value": "— Peter Drucker"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "on_surface"
                        }
                      }
                    },
                    "editorId": "a1c8f3c1-3503-4e0a-a24b-79da3bc922a6"
                  }
                ],
                "editorId": "faf855f3-52a8-4877-b153-9d0cffe35dcd"
              }
            ],
            "editorId": "3e53cc3d-dfb1-43f1-b7a1-cb750bfa01b4"
          }
        ],
        "editorId": "32d92dd9-f2a2-473d-90a4-80f1f110a6e5"
      }
    ],
    "editorId": "bbd40958-6418-4a52-b40a-fc55b39b37aa"
  }
}
```

### 6. Main Dashboard

- Frame ID: `e05f488f-4c90-461a-abb0-e72b7b6a9006`
- Original page prompt: "Card-based UI showing career suggestions, degree paths, college suggestions, and recommended courses."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "row",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 260,
                  "isInfinity": false
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "border": {
                "borderSided": {
                  "side": "right",
                  "width": 1,
                  "color": "divider"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "6714f3c1-a460-4465-b5d9-e5ac7d558046"
                          }
                        ],
                        "editorId": "ee64ba22-793e-4425-93c0-58b330876341"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          }
                        },
                        "editorId": "18904e03-51cf-4931-910b-a51a453749c2"
                      }
                    ],
                    "editorId": "dee13d10-7d12-4299-bbbc-63a80c628ce6"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Dashboard"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "4c1a9b21-d2c7-4bee-b3ca-9ec1da7026b8"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "route_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Roadmap"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "541b0eed-eb81-40ec-91df-478f9d3ad67e"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "school_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Colleges"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "a25dcbb1-aabc-44c8-9dbf-71a441ac5e6f"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "chat_bubble_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Mentor"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "e078703b-e47a-4283-95f4-16289238b396"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "settings_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Settings"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "bc8c52c6-58dc-475d-bbcd-fa09685cbc18"
                      }
                    ],
                    "editorId": "c09ac409-aabb-4fe9-9db9-9f9696aed066"
                  },
                  {
                    "type": "spacer",
                    "editorId": "893584be-7294-4615-bf82-12c40b375880"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "background"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "avatar",
                            "properties": {
                              "text": {
                                "stringVal": {
                                  "value": "JD"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "accent"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_primary"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 40
                                }
                              }
                            },
                            "editorId": "71223f7a-9fe9-4f50-a777-6f996637e6d9"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "John Doe"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_large"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "max_lines": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      },
                                      "overflow": {
                                        "stringVal": {
                                          "value": "ellipsis"
                                        }
                                      }
                                    },
                                    "editorId": "44763c31-cdba-472a-8e74-3e7d9f676752"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Student"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "f4c5c459-cadf-400f-9625-ae95888bd29b"
                                  }
                                ],
                                "editorId": "8c9b5e20-863b-486d-9d73-4440000b5dc5"
                              }
                            ],
                            "editorId": "88a4274c-3a1b-48c7-8d3b-1b2385d2f655"
                          }
                        ],
                        "editorId": "6228f8b4-c6f9-4c33-9ae5-ad8b7971abc2"
                      }
                    ],
                    "editorId": "f6e325ca-9c5c-4950-8e78-62e23bab63c4"
                  }
                ],
                "editorId": "5822d7a9-d46d-4835-aff7-5934134db077"
              }
            ],
            "editorId": "af12531d-4806-4974-a13f-b784bff87ce3"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "scroll": {
                    "boolVal": {
                      "value": true
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "xl"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "space_between"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Welcome back, John!"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "headline_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "ff1c6073-3ae0-47f9-ba84-f345a4caec24"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Your AI-generated career path is ready for review."
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "body_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "d395ad5d-22bf-4d00-a089-2748c1934bb1"
                          }
                        ],
                        "editorId": "de551dfd-25d5-4563-8cd5-91bee48eebcb"
                      },
                      {
                        "type": "@std.button",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Retake Assessment"
                            }
                          },
                          "variant": {
                            "stringVal": {
                              "value": "outline"
                            }
                          },
                          "icon": {
                            "stringVal": {
                              "value": "refresh_rounded"
                            }
                          }
                        },
                        "editorId": "2439937b-17d7-4967-935f-883eec699fdb"
                      }
                    ],
                    "editorId": "957aaf6d-5946-41cd-99ee-626fbd03c435"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 2
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Top Career Matches"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "title_large"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "e45b9fb1-7e32-412f-a6df-4ead32c72072"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "expanded",
                                    "properties": {
                                      "flex": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "@career_card",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "code_rounded"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "Full Stack Developer"
                                            }
                                          },
                                          "desc": {
                                            "stringVal": {
                                              "value": "Build end-to-end web applications using modern frameworks."
                                            }
                                          },
                                          "salary": {
                                            "stringVal": {
                                              "value": "$95k - $140k"
                                            }
                                          }
                                        },
                                        "editorId": "01b5b872-9fb3-4530-877e-835cde4bbd2c"
                                      }
                                    ],
                                    "editorId": "d53364ed-cb52-4655-b15f-5d9aefe9f031"
                                  },
                                  {
                                    "type": "expanded",
                                    "properties": {
                                      "flex": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "@career_card",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "terminal_rounded"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "DevOps Engineer"
                                            }
                                          },
                                          "desc": {
                                            "stringVal": {
                                              "value": "Bridge the gap between development and IT operations."
                                            }
                                          },
                                          "salary": {
                                            "stringVal": {
                                              "value": "$110k - $165k"
                                            }
                                          }
                                        },
                                        "editorId": "69c9a905-3499-4cd7-91c1-0e2de08e5787"
                                      }
                                    ],
                                    "editorId": "0a4a3853-6f6b-48e7-8db6-38016db1dd63"
                                  }
                                ],
                                "editorId": "f51be3b1-19e3-4180-bf01-c6d97db2b505"
                              },
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Recommended Institutions"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "title_medium"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "9b95def6-f4c4-4977-8942-44ce7f8555b8"
                                          },
                                          {
                                            "type": "@std.button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "View All"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "ghost"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              }
                                            },
                                            "editorId": "dccef64e-8b70-4f19-af2f-9113e2729f63"
                                          }
                                        ],
                                        "editorId": "e98770b2-1e68-42cc-97e6-16060fe36cf9"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "row",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "avatar",
                                                "properties": {
                                                  "source_desc": {
                                                    "imageSource": {
                                                      "type": "IMAGE_SOURCE_TYPE_URL",
                                                      "value": "https://dimg.dreamflow.cloud/v1/image/university+logo"
                                                    }
                                                  },
                                                  "size": {
                                                    "numberVal": {
                                                      "value": 48
                                                    }
                                                  },
                                                  "radius": {
                                                    "radius": {
                                                      "topLeft": 0,
                                                      "topRight": 0,
                                                      "bottomLeft": 0,
                                                      "bottomRight": 0,
                                                      "token": "sm"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "background"
                                                    }
                                                  }
                                                },
                                                "editorId": "2c2e1cc6-52d4-41d2-bfef-fe2761bcfbda"
                                              },
                                              {
                                                "type": "expanded",
                                                "children": [
                                                  {
                                                    "type": "column",
                                                    "properties": {
                                                      "cross_align": {
                                                        "align": {
                                                          "named": "start"
                                                        }
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "type": "text",
                                                        "properties": {
                                                          "content": {
                                                            "stringVal": {
                                                              "value": "Stanford University"
                                                            }
                                                          },
                                                          "style": {
                                                            "textStyle": {
                                                              "styleName": "label_large"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "primary_text"
                                                            }
                                                          }
                                                        },
                                                        "editorId": "6df189af-8d9f-44d0-912b-9ad43e9fea77"
                                                      },
                                                      {
                                                        "type": "text",
                                                        "properties": {
                                                          "content": {
                                                            "stringVal": {
                                                              "value": "Computer Science • Top 1% Rank"
                                                            }
                                                          },
                                                          "style": {
                                                            "textStyle": {
                                                              "styleName": "body_small"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "secondary_text"
                                                            }
                                                          }
                                                        },
                                                        "editorId": "8184987f-1523-439e-b5ae-02e8fa9f670b"
                                                      }
                                                    ],
                                                    "editorId": "34a99046-3145-4587-a10f-5ffdb32164c4"
                                                  }
                                                ],
                                                "editorId": "f047476d-3fb1-4743-979a-117eea3a908b"
                                              },
                                              {
                                                "type": "@std.button",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Apply"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "outline"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  }
                                                },
                                                "editorId": "b77f3220-ead3-4382-9a8a-7bfbfed3f33f"
                                              }
                                            ],
                                            "editorId": "b1f438ff-29d6-4bc4-a53d-119825c3f9b5"
                                          },
                                          {
                                            "type": "divider",
                                            "properties": {
                                              "color": {
                                                "color": {
                                                  "color": "divider"
                                                }
                                              }
                                            },
                                            "editorId": "a7d21a16-e93d-45b2-b33d-1152bafa1bdf"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "avatar",
                                                "properties": {
                                                  "source_desc": {
                                                    "imageSource": {
                                                      "type": "IMAGE_SOURCE_TYPE_URL",
                                                      "value": "https://dimg.dreamflow.cloud/v1/image/college+crest"
                                                    }
                                                  },
                                                  "size": {
                                                    "numberVal": {
                                                      "value": 48
                                                    }
                                                  },
                                                  "radius": {
                                                    "radius": {
                                                      "topLeft": 0,
                                                      "topRight": 0,
                                                      "bottomLeft": 0,
                                                      "bottomRight": 0,
                                                      "token": "sm"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "background"
                                                    }
                                                  }
                                                },
                                                "editorId": "16ba6827-6cfe-497f-93ca-7965e2c9b653"
                                              },
                                              {
                                                "type": "expanded",
                                                "children": [
                                                  {
                                                    "type": "column",
                                                    "properties": {
                                                      "cross_align": {
                                                        "align": {
                                                          "named": "start"
                                                        }
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "type": "text",
                                                        "properties": {
                                                          "content": {
                                                            "stringVal": {
                                                              "value": "MIT"
                                                            }
                                                          },
                                                          "style": {
                                                            "textStyle": {
                                                              "styleName": "label_large"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "primary_text"
                                                            }
                                                          }
                                                        },
                                                        "editorId": "f84f1bfa-9588-4212-9da4-95f6cfd10bb6"
                                                      },
                                                      {
                                                        "type": "text",
                                                        "properties": {
                                                          "content": {
                                                            "stringVal": {
                                                              "value": "Engineering & Tech • Global Leader"
                                                            }
                                                          },
                                                          "style": {
                                                            "textStyle": {
                                                              "styleName": "body_small"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "secondary_text"
                                                            }
                                                          }
                                                        },
                                                        "editorId": "92793a0a-72de-4acd-94b0-54c98400cd32"
                                                      }
                                                    ],
                                                    "editorId": "646f3de2-64e0-46ba-9d6a-048ffa85dc41"
                                                  }
                                                ],
                                                "editorId": "3a0dbabb-0d8d-4c33-890a-c4dde98566ab"
                                              },
                                              {
                                                "type": "@std.button",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Apply"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "outline"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  }
                                                },
                                                "editorId": "351cbea4-0769-4c3e-bfc3-10c03ae51b62"
                                              }
                                            ],
                                            "editorId": "014ce784-4d53-4d64-8716-a72b8f89dadc"
                                          }
                                        ],
                                        "editorId": "18bc68d1-01f4-48a1-a3a2-e309ca63ee86"
                                      }
                                    ],
                                    "editorId": "711061a2-ec2b-45f0-ac4c-50bf6788b45d"
                                  }
                                ],
                                "editorId": "836a59eb-33f8-4cdd-ae78-8ce9e901de89"
                              }
                            ],
                            "editorId": "dac2ed17-bd0f-4207-8ec7-f16f16e6bb6a"
                          }
                        ],
                        "editorId": "0160740a-d922-4481-a7e5-70c874864fe8"
                      },
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              },
                              "min_height": {
                                "px": {
                                  "value": 500,
                                  "isInfinity": false
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "stretch"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Your Learning Roadmap"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "title_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "90ac68b0-5745-4409-b7b5-a4ed0ee1a4ac"
                                  },
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "numberVal": {
                                          "value": 0
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "@roadmap_step",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "school"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "Foundation"
                                            }
                                          },
                                          "subtitle": {
                                            "stringVal": {
                                              "value": "Master HTML, CSS & JavaScript basics"
                                            }
                                          },
                                          "completed": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "not_last": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "03c3ff29-b70b-41b9-9bbb-ca66edfad840"
                                      },
                                      {
                                        "type": "@roadmap_step",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "storage"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "Database Design"
                                            }
                                          },
                                          "subtitle": {
                                            "stringVal": {
                                              "value": "Learn SQL, NoSQL and Data Modeling"
                                            }
                                          },
                                          "completed": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "not_last": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "a01e782b-f860-42e1-8b4f-83bdfe27ae8e"
                                      },
                                      {
                                        "type": "@roadmap_step",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "layers"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "Frontend Frameworks"
                                            }
                                          },
                                          "subtitle": {
                                            "stringVal": {
                                              "value": "React, Vue or Angular specialization"
                                            }
                                          },
                                          "completed": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          },
                                          "not_last": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "bb3ca3a8-8cde-4c21-a777-2964358d2dee"
                                      },
                                      {
                                        "type": "@roadmap_step",
                                        "properties": {
                                          "icon": {
                                            "stringVal": {
                                              "value": "cloud"
                                            }
                                          },
                                          "title": {
                                            "stringVal": {
                                              "value": "Cloud Deployment"
                                            }
                                          },
                                          "subtitle": {
                                            "stringVal": {
                                              "value": "AWS/Azure and CI/CD Pipelines"
                                            }
                                          },
                                          "completed": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          },
                                          "not_last": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          }
                                        },
                                        "editorId": "48d3ddb3-5a36-4fe8-86b0-627d9759b856"
                                      }
                                    ],
                                    "editorId": "a7c53099-35b2-4469-b850-daef403e0789"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "bg": {
                                        "color": {
                                          "color": "background"
                                        }
                                      },
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "token": "md"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "margin": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "topToken": "top",
                                          "rightToken": "lg",
                                          "bottomToken": "top",
                                          "leftToken": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Current Progress"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_medium"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "0d1352e8-32ea-4149-b48b-9afcdd04ca9d"
                                          },
                                          {
                                            "type": "progress",
                                            "properties": {
                                              "value": {
                                                "numberVal": {
                                                  "value": 0.45
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary"
                                                }
                                              },
                                              "thickness": {
                                                "numberVal": {
                                                  "value": 8
                                                }
                                              }
                                            },
                                            "editorId": "a29221d5-eefd-4834-be8c-490bd6bc7c52"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "45% of Roadmap Completed"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "0601281a-2bf8-4d4e-8285-2e96a7053d40"
                                          }
                                        ],
                                        "editorId": "ecd481d5-4cb6-41ec-bd80-28358c0726b6"
                                      }
                                    ],
                                    "editorId": "457de51c-09dc-4321-bd11-1119ca3db2a9"
                                  },
                                  {
                                    "type": "@std.button",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Continue Learning"
                                        }
                                      },
                                      "full_width": {
                                        "boolVal": {
                                          "value": true
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "primary"
                                        }
                                      }
                                    },
                                    "editorId": "80d4a804-fb5e-439a-87eb-fccf0985503b"
                                  }
                                ],
                                "editorId": "7c23227a-b550-41d1-b468-4cf59961edfc"
                              }
                            ],
                            "editorId": "f724a00d-7d3e-4a5e-86ba-65aea703f126"
                          }
                        ],
                        "editorId": "c0cb3fea-698f-4d4d-941d-de929ead7804"
                      }
                    ],
                    "editorId": "40d81f1d-ec02-47ed-9738-fb2cbc1dd3af"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Continue Learning (Recommended)"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "title_large"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          }
                        },
                        "editorId": "003c8d56-e41e-49e5-a3fa-335339dab3e3"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "clip": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "image",
                                        "properties": {
                                          "source_desc": {
                                            "imageSource": {
                                              "type": "IMAGE_SOURCE_TYPE_URL",
                                              "value": "https://dimg.dreamflow.cloud/v1/image/online+course+thumbnail+coding"
                                            }
                                          },
                                          "height": {
                                            "px": {
                                              "value": 120,
                                              "isInfinity": false
                                            }
                                          },
                                          "fit": {
                                            "stringVal": {
                                              "value": "cover"
                                            }
                                          }
                                        },
                                        "editorId": "6d1fe272-bf09-48fb-ab28-afcc7cc4498b"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "padding": {
                                            "edgeInsets": {
                                              "top": 0,
                                              "right": 0,
                                              "bottom": 0,
                                              "left": 0,
                                              "token": "md"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "xs"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Advanced React Patterns"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "max_lines": {
                                                "numberVal": {
                                                  "value": 1
                                                }
                                              },
                                              "overflow": {
                                                "stringVal": {
                                                  "value": "ellipsis"
                                                }
                                              }
                                            },
                                            "editorId": "056e88d7-8d59-4e60-ae94-d97b872d0d2d"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "By PhysicsWallah • 12h content"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "28b054de-8ea2-48b8-867b-e1bc89cb03b7"
                                          },
                                          {
                                            "type": "@std.button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Enroll Now"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "ghost"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              }
                                            },
                                            "editorId": "062fd712-d7e0-4f69-af1c-10f981b5382e"
                                          }
                                        ],
                                        "editorId": "31536f07-1028-420b-bbe3-c0d2ad29064f"
                                      }
                                    ],
                                    "editorId": "59172150-1884-472a-be0d-ea7e25081d52"
                                  }
                                ],
                                "editorId": "c1830107-24f7-4042-b693-dc2ce3c46ed1"
                              }
                            ],
                            "editorId": "80353a4f-74d3-476b-86bb-2801379f2205"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "clip": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "image",
                                        "properties": {
                                          "source_desc": {
                                            "imageSource": {
                                              "type": "IMAGE_SOURCE_TYPE_URL",
                                              "value": "https://dimg.dreamflow.cloud/v1/image/system+design+course"
                                            }
                                          },
                                          "height": {
                                            "px": {
                                              "value": 120,
                                              "isInfinity": false
                                            }
                                          },
                                          "fit": {
                                            "stringVal": {
                                              "value": "cover"
                                            }
                                          }
                                        },
                                        "editorId": "1218198d-82c4-4136-a897-3402787a9cb1"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "padding": {
                                            "edgeInsets": {
                                              "top": 0,
                                              "right": 0,
                                              "bottom": 0,
                                              "left": 0,
                                              "token": "md"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "xs"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "System Design Masterclass"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "max_lines": {
                                                "numberVal": {
                                                  "value": 1
                                                }
                                              },
                                              "overflow": {
                                                "stringVal": {
                                                  "value": "ellipsis"
                                                }
                                              }
                                            },
                                            "editorId": "95005814-c709-47a5-af5f-9a109ae71149"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "By Tech Academy • 24h content"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "50066b87-8fc4-40a8-b702-774e7ead634f"
                                          },
                                          {
                                            "type": "@std.button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Enroll Now"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "ghost"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              }
                                            },
                                            "editorId": "75c6670d-2070-43b4-90e4-39a5486c7abb"
                                          }
                                        ],
                                        "editorId": "53adcd07-1b2f-43fd-b908-e88f518af58c"
                                      }
                                    ],
                                    "editorId": "c7b9e4f6-7dff-4c1e-a1ce-eb44bc8e9e39"
                                  }
                                ],
                                "editorId": "2b2fa0db-39d9-4b09-ba23-9eb4faa6c91e"
                              }
                            ],
                            "editorId": "7f4c06ca-813e-43f9-8086-6cfdfee45207"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "clip": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "image",
                                        "properties": {
                                          "source_desc": {
                                            "imageSource": {
                                              "type": "IMAGE_SOURCE_TYPE_URL",
                                              "value": "https://dimg.dreamflow.cloud/v1/image/data+structures+course"
                                            }
                                          },
                                          "height": {
                                            "px": {
                                              "value": 120,
                                              "isInfinity": false
                                            }
                                          },
                                          "fit": {
                                            "stringVal": {
                                              "value": "cover"
                                            }
                                          }
                                        },
                                        "editorId": "3416567b-3139-444d-ae16-5f75e2c3a42b"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "padding": {
                                            "edgeInsets": {
                                              "top": 0,
                                              "right": 0,
                                              "bottom": 0,
                                              "left": 0,
                                              "token": "md"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "xs"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "DSA for Interviews"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "max_lines": {
                                                "numberVal": {
                                                  "value": 1
                                                }
                                              },
                                              "overflow": {
                                                "stringVal": {
                                                  "value": "ellipsis"
                                                }
                                              }
                                            },
                                            "editorId": "1d48d6fb-5059-4a0d-92be-1beccf049471"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "By AlgoExperts • 40h content"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "319fd7b6-ea26-475f-abbf-7a79674dd194"
                                          },
                                          {
                                            "type": "@std.button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Enroll Now"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "ghost"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              }
                                            },
                                            "editorId": "491e8409-0e4f-4ad0-85c2-c1d6bf7b0093"
                                          }
                                        ],
                                        "editorId": "5fd499ea-f27b-4776-a947-5087284ed745"
                                      }
                                    ],
                                    "editorId": "e008f730-591c-4e67-b0d9-75fa5f63a631"
                                  }
                                ],
                                "editorId": "ed3a6b9e-c8b7-48d2-a755-e48cf7729c0a"
                              }
                            ],
                            "editorId": "6073d359-26bd-49fd-8829-b48c726fa8b9"
                          }
                        ],
                        "editorId": "a6621814-9556-4412-9ac8-cc0661cabfb7"
                      }
                    ],
                    "editorId": "67900c77-dc67-47ec-a9c7-d0224ed342bb"
                  }
                ],
                "editorId": "1b9eea43-fca9-47b6-b5d7-e8f99b45406c"
              }
            ],
            "editorId": "be37b692-4ba7-4399-ad99-f6e01bbc7e34"
          }
        ],
        "editorId": "62d72f95-bd45-496f-a3fc-7a8534c40983"
      }
    ],
    "editorId": "63793b87-6749-4dd9-a2a4-e7b8d1d010ab"
  }
}
```

### 7. Career Detail

- Frame ID: `e6526939-7c9e-4536-aa13-2c6f6561212f`
- Original page prompt: "Detailed view of a specific career including required skills, salary range, and future scope."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "row",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 260,
                  "isInfinity": false
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "border": {
                "borderSided": {
                  "side": "right",
                  "width": 1,
                  "color": "divider"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "cd167261-b7f3-47c3-bf00-32faf99517d7"
                          }
                        ],
                        "editorId": "87e27717-db28-430b-8b08-84864bc2c8cd"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          }
                        },
                        "editorId": "24b6207e-e80a-48e8-b4d6-ab2e193014d6"
                      }
                    ],
                    "editorId": "30118db5-5d34-4192-a9c5-041e6d462ca4"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "@sidebar_nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Dashboard"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "7bd10d53-8d3c-45b8-b426-319325990b56"
                      },
                      {
                        "type": "@sidebar_nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "route_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Roadmap"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "fa763e80-a655-4451-98f5-f49479ae9723"
                      },
                      {
                        "type": "@sidebar_nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "school_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Colleges"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "210e8b08-55c3-4a6d-94a8-10a67e78220e"
                      },
                      {
                        "type": "@sidebar_nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "chat_bubble_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Mentor"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "2db68167-e1b8-4cb0-9ce2-685b54f51544"
                      },
                      {
                        "type": "@sidebar_nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "settings_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Settings"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "fe5e27ca-b2b4-4413-968b-af3b701d7c00"
                      }
                    ],
                    "editorId": "5c4282d8-ec1e-40d9-b885-8f8c617bdc90"
                  },
                  {
                    "type": "spacer",
                    "editorId": "5d812621-1eba-4e45-a307-1f700697e5ac"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "background"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "avatar",
                            "properties": {
                              "text": {
                                "stringVal": {
                                  "value": "JD"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "accent"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_primary"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 40
                                }
                              }
                            },
                            "editorId": "1195e88c-6f6f-4ae8-a7b6-ba0904110778"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "John Doe"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_large"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "max_lines": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      },
                                      "overflow": {
                                        "stringVal": {
                                          "value": "ellipsis"
                                        }
                                      }
                                    },
                                    "editorId": "0a9e3db4-4044-4c6a-866d-0885c80dbeba"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Student"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "dc3ac4c7-1cd5-4730-bd51-d95e36dd33e2"
                                  }
                                ],
                                "editorId": "18bd26ad-8d94-41d8-aff3-12e919d6a14f"
                              }
                            ],
                            "editorId": "f8adf82f-5884-482d-a743-b0704a8e47e2"
                          }
                        ],
                        "editorId": "f4d80691-1e61-4fb2-b8ed-47503b33c2fb"
                      }
                    ],
                    "editorId": "bc388b41-a746-4441-b293-64f6f15534f2"
                  }
                ],
                "editorId": "1e890708-9817-4d08-82ae-cd94ce35c0ee"
              }
            ],
            "editorId": "42879d8e-89bb-4f6e-9a43-2b898c0ec761"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "scroll": {
                    "boolVal": {
                      "value": true
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "xl"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "iconbutton",
                        "properties": {
                          "name": {
                            "icon": {
                              "name": "arrow_back_rounded"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "surface"
                            }
                          },
                          "border": {
                            "border": {
                              "width": 1,
                              "color": "divider"
                            }
                          }
                        },
                        "editorId": "8ea7a776-96f3-4f69-a5b8-935db84c80e4"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Career Details"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "label_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              }
                            },
                            "editorId": "37c7e6d6-c706-4930-b968-21ee0541e2d3"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Full Stack Developer"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "headline_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "8b46b01f-5c1b-4d07-820f-313c4e7565cb"
                          }
                        ],
                        "editorId": "58a2f804-23a2-400e-9810-340fcd4e56bf"
                      }
                    ],
                    "editorId": "ade39cb1-8540-49ad-abff-e7896fa3db27"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 2
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "xl"
                                }
                              },
                              "clip": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "stack",
                                "children": [
                                  {
                                    "type": "image",
                                    "properties": {
                                      "source_desc": {
                                        "imageSource": {
                                          "type": "IMAGE_SOURCE_TYPE_URL",
                                          "value": "https://dimg.dreamflow.cloud/v1/image/modern+software+engineering+office+with+multiple+monitors+and+code"
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 240,
                                          "isInfinity": false
                                        }
                                      },
                                      "width": {
                                        "px": {
                                          "value": "Infinity",
                                          "isInfinity": true
                                        }
                                      },
                                      "fit": {
                                        "stringVal": {
                                          "value": "cover"
                                        }
                                      }
                                    },
                                    "editorId": "5958d2d8-8151-4420-b727-a9674ee039d1"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "height": {
                                        "px": {
                                          "value": 240,
                                          "isInfinity": false
                                        }
                                      },
                                      "gradient": {
                                        "gradient": {
                                          "type": "GRADIENT_TYPE_LINEAR",
                                          "direction": "to_top",
                                          "stops": [
                                            {
                                              "color": "#000000CC",
                                              "position": 0
                                            },
                                            {
                                              "color": "transparent",
                                              "position": 100
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    "editorId": "94860731-efd2-4efa-9c70-ef50f0817a64"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "height": {
                                        "px": {
                                          "value": 240,
                                          "isInfinity": false
                                        }
                                      },
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "token": "lg"
                                        }
                                      },
                                      "align_y": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "chip",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "High Demand"
                                                }
                                              },
                                              "bg": {
                                                "color": {
                                                  "color": "primary"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_primary"
                                                }
                                              },
                                              "radius": {
                                                "radius": {
                                                  "topLeft": 0,
                                                  "topRight": 0,
                                                  "bottomLeft": 0,
                                                  "bottomRight": 0,
                                                  "token": "md"
                                                }
                                              }
                                            },
                                            "editorId": "6d6e9244-008e-4561-8dc7-dc6c23f9438b"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Architect, build, and maintain end-to-end web applications. You'll work with both front-end interfaces and back-end server logic."
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_large"
                                                }
                                              },
                                              "max_lines": {
                                                "numberVal": {
                                                  "value": 2
                                                }
                                              },
                                              "overflow": {
                                                "stringVal": {
                                                  "value": "ellipsis"
                                                }
                                              }
                                            },
                                            "editorId": "a5fcce3a-e641-4f11-b877-43a2af24f390"
                                          }
                                        ],
                                        "editorId": "8a1b4b22-7e70-4ff6-8137-92586259f642"
                                      }
                                    ],
                                    "editorId": "99e96c9f-3794-4928-be0c-6aab7a92f583"
                                  }
                                ],
                                "editorId": "a44aa338-7bcc-48a3-b1e5-c4e175071634"
                              }
                            ],
                            "editorId": "16ac7a53-8d10-43b0-a4b7-5121ee62bc52"
                          }
                        ],
                        "editorId": "37a1508c-540e-44cd-9727-1827a386111b"
                      },
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@stat_card",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "payments_rounded"
                                    }
                                  },
                                  "label": {
                                    "stringVal": {
                                      "value": "Avg. Salary (Entry)"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "$85,000"
                                    }
                                  }
                                },
                                "editorId": "2d07efd4-d445-471d-939c-0fb824fe935f"
                              },
                              {
                                "type": "@stat_card",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "trending_up_rounded"
                                    }
                                  },
                                  "label": {
                                    "stringVal": {
                                      "value": "Job Growth"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "+22% YoY"
                                    }
                                  }
                                },
                                "editorId": "3204fe23-9292-4808-85ef-c260f820fea1"
                              },
                              {
                                "type": "@stat_card",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "work_history_rounded"
                                    }
                                  },
                                  "label": {
                                    "stringVal": {
                                      "value": "Experience Req."
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "0-2 Years"
                                    }
                                  }
                                },
                                "editorId": "2ab270d7-da7b-4a87-a275-fe32d218374a"
                              }
                            ],
                            "editorId": "7d11456f-e63b-4f3b-93f4-e74e75e3763e"
                          }
                        ],
                        "editorId": "4032e0eb-faa1-45a8-a496-c3dd289c2a0f"
                      }
                    ],
                    "editorId": "91a5fe68-7dcc-454b-a6fd-6b944d634287"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Required Skills"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "10a243f2-61c3-4447-a34a-c61dab90f233"
                                      },
                                      {
                                        "type": "wrap",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          },
                                          "run_spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "React / Next.js"
                                                }
                                              }
                                            },
                                            "editorId": "eafb7209-88c4-4372-b71e-a152462c59ab"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "Node.js & Express"
                                                }
                                              }
                                            },
                                            "editorId": "7299a30e-db13-4235-9077-9240599facc9"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "PostgreSQL / NoSQL"
                                                }
                                              }
                                            },
                                            "editorId": "137692dc-f0f9-43b2-ab7e-81cf982a1f9c"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "TypeScript"
                                                }
                                              }
                                            },
                                            "editorId": "46ffeba4-9bfc-433e-a6ec-0d48a3f7e371"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "AWS / Docker"
                                                }
                                              }
                                            },
                                            "editorId": "411989f9-9297-42a4-aac4-67cc18fd2fc6"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "System Design"
                                                }
                                              }
                                            },
                                            "editorId": "7cf04714-76bd-421e-b6a5-2f0c5562b092"
                                          },
                                          {
                                            "type": "@skill_badge",
                                            "properties": {
                                              "skill": {
                                                "stringVal": {
                                                  "value": "Git & CI/CD"
                                                }
                                              }
                                            },
                                            "editorId": "3dbb951d-1f3c-4321-bee4-91a3015dab48"
                                          }
                                        ],
                                        "editorId": "e6752f6b-b21a-4f92-a73b-db628947ff49"
                                      }
                                    ],
                                    "editorId": "14777bec-2a23-47e8-9db6-98de7c310f76"
                                  }
                                ],
                                "editorId": "f575756b-c583-4335-a994-3f3324592033"
                              },
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Future Scope"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "2ef5186b-d4f6-46cb-a3d0-0a8bdc8d9eb1"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "The transition towards AI-integrated applications and serverless architectures is creating a massive surge in demand for Full Stack Engineers who can manage complex cloud ecosystems."
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "d65d6d56-71b5-4a8f-a522-702ebb132411"
                                      },
                                      {
                                        "type": "divider",
                                        "properties": {
                                          "color": {
                                            "color": {
                                              "color": "divider"
                                            }
                                          }
                                        },
                                        "editorId": "7c94941a-f5ee-4074-acb4-0b0028680321"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Role Evolution"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "b805e00b-c54e-4e44-bc27-63d1f0875536"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Lead Architect"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              }
                                            },
                                            "editorId": "719417c5-770d-4564-9324-81b5bddda85f"
                                          }
                                        ],
                                        "editorId": "dea66638-a76e-41dd-a6fe-4bf198bdb3dc"
                                      },
                                      {
                                        "type": "progress",
                                        "properties": {
                                          "value": {
                                            "numberVal": {
                                              "value": 0.8
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary"
                                            }
                                          },
                                          "thickness": {
                                            "numberVal": {
                                              "value": 8
                                            }
                                          }
                                        },
                                        "editorId": "edcef155-a5d4-4a9b-b0bd-cc86dd4e6ade"
                                      }
                                    ],
                                    "editorId": "e5992cbb-6381-48f8-9cce-a9a8d577ede0"
                                  }
                                ],
                                "editorId": "66293a7d-63f1-472f-b8c0-cf3faa75bb96"
                              }
                            ],
                            "editorId": "afc70e5d-1476-4dbf-b62c-d1b74c86a373"
                          }
                        ],
                        "editorId": "1baa22df-3567-477d-9bd4-539de77be49b"
                      },
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Salary Trend (USD/Year)"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "c7922ffc-679d-4c33-bdba-b6e999cf3342"
                                      },
                                      {
                                        "type": "container",
                                        "properties": {
                                          "height": {
                                            "px": {
                                              "value": 180,
                                              "isInfinity": false
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "line_chart",
                                            "properties": {
                                              "data": {
                                                "stringVal": {
                                                  "value": "65000,85000,110000,145000,190000"
                                                }
                                              },
                                              "labels": {
                                                "stringVal": {
                                                  "value": "Entry,Junior,Mid,Senior,Lead"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary"
                                                }
                                              },
                                              "curved": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "filled": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "show_dots": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              }
                                            },
                                            "editorId": "b66ffb95-6def-4572-bf81-632fad0bc82d"
                                          }
                                        ],
                                        "editorId": "edf92dfb-abc5-4e0d-a43b-7521c21cf023"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Based on global tech hub averages 2024"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "text_align": {
                                            "align": {
                                              "named": "center"
                                            }
                                          }
                                        },
                                        "editorId": "b27501c6-674b-49eb-8e05-308928626c7e"
                                      }
                                    ],
                                    "editorId": "89f4fc5f-b08f-4ada-982c-8920e085d6e7"
                                  }
                                ],
                                "editorId": "42fc8136-8ea6-4536-b148-10aec0bef6f3"
                              },
                              {
                                "type": "container",
                                "properties": {
                                  "gradient": {
                                    "gradient": {
                                      "type": "GRADIENT_TYPE_LINEAR",
                                      "direction": "135",
                                      "stops": [
                                        {
                                          "color": "primary",
                                          "position": 0
                                        },
                                        {
                                          "color": "accent",
                                          "position": 100
                                        }
                                      ]
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "shadow": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "icon",
                                            "properties": {
                                              "name": {
                                                "icon": {
                                                  "name": "auto_awesome_rounded"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              },
                                              "size": {
                                                "numberVal": {
                                                  "value": 20
                                                }
                                              }
                                            },
                                            "editorId": "f03947a8-150a-42a1-9560-9406ca44dc03"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "AI Career Insights"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              }
                                            },
                                            "editorId": "fde15f53-d6b5-4350-aac6-36ebc057e892"
                                          }
                                        ],
                                        "editorId": "5454f350-5149-4e1e-8376-d4fe41533543"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Your profile shows a 94% aptitude for logical reasoning and 88% for creative problem solving, making you a top candidate for Full Stack roles."
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_medium"
                                            }
                                          }
                                        },
                                        "editorId": "dfbaf9cb-1849-4625-b331-adba3cc20003"
                                      },
                                      {
                                        "type": "@std.button",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Ask AI Mentor"
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "secondary"
                                            }
                                          },
                                          "full_width": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "chat_bubble_outline_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "2ccc8d13-f6cf-458d-986e-e686024d913e"
                                      }
                                    ],
                                    "editorId": "e09b76dc-6348-45e4-95fe-f9f742b12321"
                                  }
                                ],
                                "editorId": "9734f45e-334a-4932-a535-36553a7cb0e8"
                              }
                            ],
                            "editorId": "b8cc87fc-536f-4733-9951-a130e06f47d2"
                          }
                        ],
                        "editorId": "66d56b73-8f55-4ff6-ab6f-c45374cb24d5"
                      }
                    ],
                    "editorId": "fa1b2efa-4ce6-4035-bf3a-58190c6eecb4"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "lg"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 80,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 80,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "background"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "terminal_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "on_surface"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 40
                                    }
                                  }
                                },
                                "editorId": "c0e77800-4370-48f5-a4eb-c34336543c72"
                              }
                            ],
                            "editorId": "ae516ddc-7611-4293-9642-cb5d9e26d72b"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xs"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Ready to start this journey?"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "title_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "e9d1e3b9-836b-4fb9-bbbe-0726d2ef2648"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "We've generated a 6-month intensive roadmap to get you job-ready for this role."
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "ec2c373b-93d0-43b5-8af6-84c6a3f66768"
                                  }
                                ],
                                "editorId": "b8d43873-7304-4e90-9476-aa3fbeb1f430"
                              }
                            ],
                            "editorId": "ce3540e4-f31f-48b4-a092-874108337a82"
                          },
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "View Full Roadmap"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "primary"
                                }
                              },
                              "size": {
                                "stringVal": {
                                  "value": "large"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "arrow_forward_rounded"
                                }
                              }
                            },
                            "editorId": "cfa0208d-d9d4-4739-926b-55691b9c430d"
                          }
                        ],
                        "editorId": "2d01e3db-2055-4357-8467-652abaa026b4"
                      }
                    ],
                    "editorId": "7b6ead55-2eb4-4910-b58b-0c7f5b3e9542"
                  }
                ],
                "editorId": "6e35eda9-9594-4571-b0ad-36e65c736c4c"
              }
            ],
            "editorId": "28ec117c-0406-4714-934e-7d92026e57aa"
          }
        ],
        "editorId": "5dc3e7fb-8e81-4ef3-9e3d-b168349572f1"
      }
    ],
    "editorId": "a9dc0cc5-eceb-4b85-b380-3993d01d24f7"
  }
}
```

### 8. Career Roadmap

- Frame ID: `d7466f91-98f0-4e93-958a-d9e13611b4a4`
- Original page prompt: "A vertical timeline UI showing steps from Foundation to Advanced levels."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "row",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 280,
                  "isInfinity": false
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "border": {
                "borderSided": {
                  "side": "right",
                  "width": 1,
                  "color": "divider"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "79dc375e-83c6-4b20-93a1-aeda678c5812"
                          }
                        ],
                        "editorId": "d6bae018-ca67-46e3-9faa-16614031fbb0"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 800
                            }
                          }
                        },
                        "editorId": "a0e07b1e-f73c-4721-87d1-4614fd7cefc9"
                      }
                    ],
                    "editorId": "ea4a044a-19b5-4fc0-beac-37ca27047da0"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xs"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Dashboard"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "c63231ec-29bd-472c-91c9-31360cae1e26"
                      },
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "route_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Roadmap"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "9d036170-8901-4110-82ff-e52020ee792c"
                      },
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "school_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Colleges"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "c5b3112d-008d-46e9-9995-8fb91bd49155"
                      },
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "chat_bubble_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Mentor"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "737120c1-a40e-4811-bd38-1ef40f5155f8"
                      },
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "event_note_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Study Planner"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "50b6b618-014f-4b15-a52d-4a3887b4d681"
                      },
                      {
                        "type": "@sidebar_nav_item__72b4013c",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "person_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Profile"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "5140c03b-14fd-4602-a0c7-3b5d81a57fc4"
                      }
                    ],
                    "editorId": "9036f953-7ab7-4d56-b7fe-0c67b8e8a6f5"
                  },
                  {
                    "type": "spacer",
                    "editorId": "b1633ffe-4dfc-4542-8d2e-346468c68d1c"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "#F5F3FF"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "lg"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "#DDD6FE"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "sm"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "auto_awesome_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "8448e54a-3765-4bb4-8423-56c63d834f72"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Go Premium"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "label_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "font_weight": {
                                "stringVal": {
                                  "value": "bold"
                                }
                              }
                            },
                            "editorId": "aa0f82b4-3970-4ba2-9c07-825ff5175015"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Unlock advanced AI pathfinding and 1-on-1 mentoring."
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "body_small"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              }
                            },
                            "editorId": "15b30e41-23f7-4c0b-8782-c8e3032402fc"
                          },
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Upgrade Now"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "primary"
                                }
                              },
                              "size": {
                                "stringVal": {
                                  "value": "small"
                                }
                              },
                              "full_width": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "8a644ee7-deb6-4fb7-bb8d-b84637dae469"
                          }
                        ],
                        "editorId": "89683d19-7bea-400d-b4f6-004651e76f7c"
                      }
                    ],
                    "editorId": "2727acc7-584f-4c20-8083-cfe08cb29eee"
                  }
                ],
                "editorId": "ed6cc796-6113-4665-ac08-add0268b2533"
              }
            ],
            "editorId": "2941a654-6e04-4d18-ba8d-35c0d46adba0"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "scroll": {
                    "boolVal": {
                      "value": true
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "xl"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "space_between"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "flag_circle_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "on_surface"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 32
                                    }
                                  }
                                },
                                "editorId": "ed235fcc-9b25-4122-8dce-f1ccc493285e"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Full-Stack Developer Path"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "bdab4ee0-1f44-4d52-bf7a-a9496a28655e"
                              }
                            ],
                            "editorId": "4a475ffd-4bed-45c9-868a-42a60db5ba7c"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Your personalized 12-month career journey from beginner to professional."
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "body_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "02a11f17-c5c5-4a65-adf2-85b76cb98a4f"
                          }
                        ],
                        "editorId": "1a0e7ead-2eca-4837-859d-b2f9bbd826ec"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Share Path"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "outline"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "share_rounded"
                                }
                              }
                            },
                            "editorId": "cc0c46c9-ff3d-4d38-8113-37d3c5096506"
                          },
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Download PDF"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "outline"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "download_rounded"
                                }
                              }
                            },
                            "editorId": "6e4ce150-d552-4cf0-b0da-0935863bf7bd"
                          }
                        ],
                        "editorId": "d5d83951-52b4-4d55-a2b9-c620d4c42298"
                      }
                    ],
                    "editorId": "b4c64680-88f0-4947-9b19-47e7d4666025"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              },
                              "shadow": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#EEF2FF"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "speed_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 24
                                            }
                                          }
                                        },
                                        "editorId": "523ab7c5-429c-4f19-b8a8-8fc11bff1342"
                                      }
                                    ],
                                    "editorId": "f1d3dbbf-79d2-4f90-8806-7656f23992f7"
                                  },
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Estimated Time"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "64f5ed42-9b97-49b4-b30a-3c9b86d044b0"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "14 Months"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "font_weight": {
                                            "stringVal": {
                                              "value": "bold"
                                            }
                                          }
                                        },
                                        "editorId": "1cebe026-063a-43c5-a8cc-334fd1c1bfd2"
                                      }
                                    ],
                                    "editorId": "d0a466d7-5c37-4d8c-b6ae-a60fbf135cef"
                                  }
                                ],
                                "editorId": "1c6c9f72-02a6-487a-a475-cb6d8694e044"
                              }
                            ],
                            "editorId": "29109bf4-3623-448a-b15e-aedc63ca5060"
                          }
                        ],
                        "editorId": "7a183a6a-98cb-48cf-98b6-94a4e00095ae"
                      },
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              },
                              "shadow": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#DCFCE7"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "trending_up_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 24
                                            }
                                          }
                                        },
                                        "editorId": "3f759f21-abb5-4f59-b0d7-6c5b42b3ea18"
                                      }
                                    ],
                                    "editorId": "4cd781a8-d939-4d8f-85fc-ce712f36afdc"
                                  },
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Market Demand"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "c9939165-cdef-4780-af60-457f9cf82c4b"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Very High"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "font_weight": {
                                            "stringVal": {
                                              "value": "bold"
                                            }
                                          }
                                        },
                                        "editorId": "ef00355f-1afa-4b16-a5d1-757112729bf0"
                                      }
                                    ],
                                    "editorId": "66e924c6-1ccc-48fe-8ffa-355879c08fb1"
                                  }
                                ],
                                "editorId": "944ccdf3-07d2-4c55-acb7-9a23cecf5565"
                              }
                            ],
                            "editorId": "08661f5f-9ec5-4068-8fcd-dd7d350f5307"
                          }
                        ],
                        "editorId": "b8dc131c-6f52-4541-9f24-a088281a50ca"
                      },
                      {
                        "type": "expanded",
                        "properties": {
                          "flex": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              },
                              "shadow": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#FEF3C7"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "payments_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "on_surface"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 24
                                            }
                                          }
                                        },
                                        "editorId": "0efb7d81-2613-41ee-953d-0b81fc8c49e8"
                                      }
                                    ],
                                    "editorId": "5c263272-1a1b-4f95-b7b5-f4c72b2b3760"
                                  },
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Entry Salary"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "264b4173-ff37-467c-9d5f-4637d8a995b3"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "$85k - $110k"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "font_weight": {
                                            "stringVal": {
                                              "value": "bold"
                                            }
                                          }
                                        },
                                        "editorId": "fc8297e4-e17e-4371-99fe-d83055135ec0"
                                      }
                                    ],
                                    "editorId": "06eca062-e4de-4a17-ad99-abe181ff2a23"
                                  }
                                ],
                                "editorId": "1db2e123-0247-4ae7-9e8f-2783be5f59b3"
                              }
                            ],
                            "editorId": "15ec19ac-92fd-4acd-ad3c-2f4e4fc2533d"
                          }
                        ],
                        "editorId": "426bebf3-4e6e-4cda-9b94-2d9ad7a0d2d9"
                      }
                    ],
                    "editorId": "83ed885d-8523-4a15-8c02-0faa7ef757d8"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Learning Phases"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "c70e2edb-9451-4765-bbd3-db03c802f53a"
                          },
                          {
                            "type": "chip",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Current Progress: 35%"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "choice"
                                }
                              },
                              "selected": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "22903f0f-5599-4ead-9483-e9099db90f5b"
                          }
                        ],
                        "editorId": "53e0d34b-de0d-4f4d-8970-5184f773e672"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "topToken": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@roadmap_node",
                            "properties": {
                              "status": {
                                "stringVal": {
                                  "value": "completed"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "school_rounded"
                                }
                              },
                              "phase": {
                                "stringVal": {
                                  "value": "PHASE 1"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Computer Science Foundations"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Master the basics of algorithms, data structures, and how computers work under the hood."
                                }
                              },
                              "modules": {
                                "stringVal": {
                                  "value": "12"
                                }
                              },
                              "duration": {
                                "stringVal": {
                                  "value": "3 Months"
                                }
                              },
                              "not_last": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "52e6040b-1142-419c-bc3f-6fcaf18107fa"
                          },
                          {
                            "type": "@roadmap_node",
                            "properties": {
                              "status": {
                                "stringVal": {
                                  "value": "completed"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "code_rounded"
                                }
                              },
                              "phase": {
                                "stringVal": {
                                  "value": "PHASE 2"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Modern Frontend Engineering"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Deep dive into HTML5, CSS3, and JavaScript (ES6+). Building responsive and interactive user interfaces."
                                }
                              },
                              "modules": {
                                "stringVal": {
                                  "value": "18"
                                }
                              },
                              "duration": {
                                "stringVal": {
                                  "value": "4 Months"
                                }
                              },
                              "not_last": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "219bb2fa-2fdd-45b9-a63b-f64e7bcd76cb"
                          },
                          {
                            "type": "@roadmap_node",
                            "properties": {
                              "status": {
                                "stringVal": {
                                  "value": "current"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "layers_rounded"
                                }
                              },
                              "phase": {
                                "stringVal": {
                                  "value": "PHASE 3"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "React & State Management"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Currently learning component architecture, hooks, and scalable state management with Redux/Zustand."
                                }
                              },
                              "modules": {
                                "stringVal": {
                                  "value": "15"
                                }
                              },
                              "duration": {
                                "stringVal": {
                                  "value": "3 Months"
                                }
                              },
                              "not_last": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "ed6b0466-a999-4753-88fd-f6372d301ffb"
                          },
                          {
                            "type": "@roadmap_node",
                            "properties": {
                              "status": {
                                "stringVal": {
                                  "value": "locked"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "storage_rounded"
                                }
                              },
                              "phase": {
                                "stringVal": {
                                  "value": "PHASE 4"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Backend & Databases"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Node.js, Express, and both SQL/NoSQL database design. Building secure RESTful and GraphQL APIs."
                                }
                              },
                              "modules": {
                                "stringVal": {
                                  "value": "22"
                                }
                              },
                              "duration": {
                                "stringVal": {
                                  "value": "4 Months"
                                }
                              },
                              "not_last": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "76841ff7-a43b-497d-b52d-23d000c138b6"
                          },
                          {
                            "type": "@roadmap_node",
                            "properties": {
                              "status": {
                                "stringVal": {
                                  "value": "locked"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "cloud_done_rounded"
                                }
                              },
                              "phase": {
                                "stringVal": {
                                  "value": "PHASE 5"
                                }
                              },
                              "title": {
                                "stringVal": {
                                  "value": "Cloud & DevOps"
                                }
                              },
                              "description": {
                                "stringVal": {
                                  "value": "Deploying applications to AWS/Vercel, CI/CD pipelines, and containerization with Docker."
                                }
                              },
                              "modules": {
                                "stringVal": {
                                  "value": "8"
                                }
                              },
                              "duration": {
                                "stringVal": {
                                  "value": "2 Months"
                                }
                              },
                              "not_last": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "db6b4082-a31b-452f-9e93-d432f44db237"
                          }
                        ],
                        "editorId": "8f149775-8015-4d74-9aac-7264691f8838"
                      }
                    ],
                    "editorId": "91f9c540-bd35-46c3-9627-322bfc65cf2e"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      },
                      "shadow": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              },
                              "expanded": {
                                "expanded": {
                                  "enabled": true,
                                  "flex": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Feeling stuck in Phase 3?"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "title_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "91c12da2-b679-49da-a7d8-e1f052adc643"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Your AI Mentor can provide specific exercises to master React Hooks."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "553cd256-9256-4fb0-81de-914c74e985a2"
                              }
                            ],
                            "editorId": "291b7d83-ff81-48c2-b252-9815dc1dbd31"
                          },
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Ask AI Mentor"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "primary"
                                }
                              },
                              "size": {
                                "stringVal": {
                                  "value": "large"
                                }
                              }
                            },
                            "editorId": "19f9c99a-28b1-4d84-a1f2-2773d4a66b4a"
                          }
                        ],
                        "editorId": "4d0efdf7-2ef5-42df-a0f5-7521bea89e6f"
                      }
                    ],
                    "editorId": "a007d427-b5e0-4884-9b7f-030d182d71b7"
                  }
                ],
                "editorId": "8bb7d4e7-0c4a-4754-b454-1263c176d8cc"
              }
            ],
            "editorId": "5d4d4b04-3d8d-47ac-ba7a-84c4d2221801"
          }
        ],
        "editorId": "7d37db66-0a6b-49c1-9875-dd4736c00817"
      }
    ],
    "editorId": "bad6b5f4-5cd2-43f1-921d-b1e6e18029c9"
  }
}
```

### 9. College Explorer

- Frame ID: `43a95c01-1581-40cb-9483-f18319bb2066`
- Original page prompt: "A list of colleges with filter UI for rank, budget, and location."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "row",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 260,
                  "isInfinity": false
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "border": {
                "borderSided": {
                  "side": "right",
                  "width": 1,
                  "color": "divider"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "c5e8ee95-9d92-4c60-b044-6476d16ac175"
                          }
                        ],
                        "editorId": "afa61d4f-f012-4748-9a6a-095c58b4e6c5"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          }
                        },
                        "editorId": "5ea0f381-5a66-4beb-b531-2193c4e2e4e2"
                      }
                    ],
                    "editorId": "ec8120d4-51f6-4c01-af82-b131c6b6d590"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Dashboard"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "5ee9372a-028b-408c-ab35-c2eccae580d7"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "route_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Roadmap"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "2cf7bb51-6e26-490e-8d40-bcc3ad00bc3c"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "school_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Colleges"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "809efe3f-2795-4073-87e8-0b427a15fb7d"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "chat_bubble_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Mentor"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "466f8dbd-73ee-48bc-87ea-70eec60477fa"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "settings_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Settings"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "9d2bb9b6-c268-4a97-80eb-3a6432a1543d"
                      }
                    ],
                    "editorId": "5625a0ae-5db7-4176-9971-478d365af0cb"
                  },
                  {
                    "type": "spacer",
                    "editorId": "fdee89f7-92bb-448b-95ce-4f7a5216c955"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "background"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "avatar",
                            "properties": {
                              "text": {
                                "stringVal": {
                                  "value": "JD"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "accent"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_surface"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 40
                                }
                              }
                            },
                            "editorId": "2836c98d-cf40-405b-8d55-e99e38e85c36"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "John Doe"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_large"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "max_lines": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      },
                                      "overflow": {
                                        "stringVal": {
                                          "value": "ellipsis"
                                        }
                                      }
                                    },
                                    "editorId": "24fb8d3a-a348-4ef7-a9e3-e936981fea7b"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Student"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "c22a1004-2c70-4775-845b-8867a943436d"
                                  }
                                ],
                                "editorId": "ac661850-2dbd-4422-9602-413ac5e2ebbf"
                              }
                            ],
                            "editorId": "e25279ef-62c0-4795-a38a-1da4ff1d3e29"
                          }
                        ],
                        "editorId": "6ab321ec-30a9-456c-a873-12d290efb2ba"
                      }
                    ],
                    "editorId": "460ea9f5-8e41-4b1d-ba5b-eb4a2ba86ffc"
                  }
                ],
                "editorId": "b2fbba37-e3b0-4da8-aacf-3e10e4280c9b"
              }
            ],
            "editorId": "29a04e18-22e2-4b7e-8bde-0b8659a3667c"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "scroll": {
                    "boolVal": {
                      "value": true
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "xl"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xl"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "align": {
                        "align": {
                          "named": "space_between"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "College Explorer"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "headline_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "ae1bceff-b821-4f35-ab22-58fc9e0c7f20"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Find the best institutions matching your AI career roadmap."
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "body_large"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "78f5ef67-37bf-48d9-a4b5-e5d785b503bc"
                          }
                        ],
                        "editorId": "7dfb4c72-d3b0-4f40-8da3-23ec359f5d8a"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Compare Colleges"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "outline"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "compare_arrows_rounded"
                                }
                              }
                            },
                            "editorId": "1649a23a-2e7e-4b9d-ba13-af3f377884d5"
                          },
                          {
                            "type": "@std.button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Shortlisted (3)"
                                }
                              },
                              "variant": {
                                "stringVal": {
                                  "value": "secondary"
                                }
                              },
                              "icon": {
                                "stringVal": {
                                  "value": "favorite_rounded"
                                }
                              }
                            },
                            "editorId": "a01af460-3570-4d75-9f60-8a7d93073d0c"
                          }
                        ],
                        "editorId": "47a5d5c4-a7e8-4d32-93e8-7fb3dfffd040"
                      }
                    ],
                    "editorId": "31939589-5dc2-4dfe-bcd5-207ebc33d174"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "lg"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 3
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@std.textfield",
                                "properties": {
                                  "leading_icon": {
                                    "stringVal": {
                                      "value": "search_rounded"
                                    }
                                  },
                                  "hint": {
                                    "stringVal": {
                                      "value": "Search by college name, course or city..."
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "outlined"
                                    }
                                  }
                                },
                                "editorId": "0bc135b1-959b-4a16-bb6e-bebfe6a703cd"
                              }
                            ],
                            "editorId": "1d2e6c2f-2023-43fc-9e0e-837ac6de4320"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "dropdown",
                                "properties": {
                                  "label": {
                                    "stringVal": {
                                      "value": "Sort By"
                                    }
                                  },
                                  "options": {
                                    "stringVal": {
                                      "value": "Highest Rank,Lowest Fees,User Rating"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "Highest Rank"
                                    }
                                  }
                                },
                                "editorId": "7694b245-7a79-4b6b-9047-51cc6ef1b0b4"
                              }
                            ],
                            "editorId": "53b47684-476f-4866-9bbd-f0da23cf4e2d"
                          }
                        ],
                        "editorId": "690107ea-b992-44c5-93b2-7baf67320f9f"
                      }
                    ],
                    "editorId": "1904a15f-3af3-4b44-afb0-608a8bb7a84d"
                  },
                  {
                    "type": "row",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 280,
                              "isInfinity": false
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@filter_group",
                                "properties": {
                                  "label": {
                                    "stringVal": {
                                      "value": "Budget (Annual Fees)"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "slider",
                                        "properties": {
                                          "value": {
                                            "numberVal": {
                                              "value": 45
                                            }
                                          },
                                          "min": {
                                            "numberVal": {
                                              "value": 0
                                            }
                                          },
                                          "max": {
                                            "numberVal": {
                                              "value": 100
                                            }
                                          },
                                          "label": {
                                            "stringVal": {
                                              "value": "Up to $45k"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary"
                                            }
                                          }
                                        },
                                        "editorId": "7c263d7a-9e24-415d-9c03-b7a13f7057c8"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "$0"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              }
                                            },
                                            "editorId": "7b5a3ef7-bcc1-45c0-838c-1497c2698792"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "$100k+"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "on_surface"
                                                }
                                              }
                                            },
                                            "editorId": "0c7a8faf-bdf0-48e5-b65f-1382eca72355"
                                          }
                                        ],
                                        "editorId": "a244d19d-4c76-440b-af0f-083b4e13f26f"
                                      }
                                    ],
                                    "editorId": "44a32f08-e3a3-4fca-826a-ce0ccd8b0690"
                                  }
                                ],
                                "editorId": "8dc20aba-d316-44bf-a6f7-8d39854b6089"
                              },
                              {
                                "type": "@filter_group",
                                "properties": {
                                  "label": {
                                    "stringVal": {
                                      "value": "Location"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "checkbox",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "United States"
                                            }
                                          },
                                          "value": {
                                            "stringVal": {
                                              "value": "true"
                                            }
                                          }
                                        },
                                        "editorId": "6ec14c0c-302b-4d93-8e45-65fb6d9e642b"
                                      },
                                      {
                                        "type": "checkbox",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "United Kingdom"
                                            }
                                          },
                                          "value": {
                                            "stringVal": {
                                              "value": "false"
                                            }
                                          }
                                        },
                                        "editorId": "50ff5cc9-8173-4cd4-bb1e-85be6a82dcf5"
                                      },
                                      {
                                        "type": "checkbox",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "Germany"
                                            }
                                          },
                                          "value": {
                                            "stringVal": {
                                              "value": "false"
                                            }
                                          }
                                        },
                                        "editorId": "f2388501-3c7c-40fc-9207-6a9c30252a12"
                                      },
                                      {
                                        "type": "checkbox",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "India"
                                            }
                                          },
                                          "value": {
                                            "stringVal": {
                                              "value": "true"
                                            }
                                          }
                                        },
                                        "editorId": "97630762-1c09-4807-a4be-0bdf15fc9a6b"
                                      },
                                      {
                                        "type": "checkbox",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "Canada"
                                            }
                                          },
                                          "value": {
                                            "stringVal": {
                                              "value": "false"
                                            }
                                          }
                                        },
                                        "editorId": "0099d70c-7c79-485a-bbb9-eb45a9242648"
                                      }
                                    ],
                                    "editorId": "80d2197b-33ed-4eff-be1c-48b860553bdc"
                                  }
                                ],
                                "editorId": "7ef9e64a-02a7-4399-a563-53a8c6950e90"
                              },
                              {
                                "type": "@filter_group",
                                "properties": {
                                  "label": {
                                    "stringVal": {
                                      "value": "Institution Type"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Public"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "04a2e195-4dc8-4e9e-9ca1-94711bb20a93"
                                      },
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Private"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "5c3d4105-8e6b-4cff-b67b-ecd20a0ef71b"
                                      }
                                    ],
                                    "editorId": "d95556d8-6a21-449f-84f0-de9f31669415"
                                  }
                                ],
                                "editorId": "0db08bbe-bffa-4634-8153-5d2d9411510d"
                              },
                              {
                                "type": "@filter_group",
                                "properties": {
                                  "label": {
                                    "stringVal": {
                                      "value": "Specialization"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "wrap",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      },
                                      "run_spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "AI & ML"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "b3b6e6cb-3b00-46e5-a0db-dbfe71a72a8b"
                                      },
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Data Science"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "fe6aab24-e988-46d4-983f-4b5b02989588"
                                      },
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Robotics"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "e366e3e1-47d0-4b92-831f-5277c4a23dec"
                                      },
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Cybersecurity"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "choice"
                                            }
                                          }
                                        },
                                        "editorId": "2d348214-207f-49d1-8b2d-66fe644c16db"
                                      }
                                    ],
                                    "editorId": "acfc6132-873c-4f92-acca-473035fadaa4"
                                  }
                                ],
                                "editorId": "d8249b95-db04-4303-8769-506c73660cfb"
                              },
                              {
                                "type": "@std.button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Reset All Filters"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "ghost"
                                    }
                                  },
                                  "full_width": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  }
                                },
                                "editorId": "f09ecab8-aa4e-4f79-9555-14ecffce4c60"
                              }
                            ],
                            "editorId": "d2a44c67-19e1-4626-8026-56a577586b9f"
                          }
                        ],
                        "editorId": "19227c34-3c16-4715-9a3c-55d1a6095c72"
                      },
                      {
                        "type": "expanded",
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@college_card",
                                "properties": {
                                  "name": {
                                    "stringVal": {
                                      "value": "Stanford University"
                                    }
                                  },
                                  "rank": {
                                    "stringVal": {
                                      "value": "1"
                                    }
                                  },
                                  "location": {
                                    "stringVal": {
                                      "value": "Stanford, CA • USA"
                                    }
                                  },
                                  "fees": {
                                    "stringVal": {
                                      "value": "$56,000"
                                    }
                                  },
                                  "rating": {
                                    "stringVal": {
                                      "value": "4.9"
                                    }
                                  },
                                  "tag1": {
                                    "stringVal": {
                                      "value": "Research Excellence"
                                    }
                                  },
                                  "tag2": {
                                    "stringVal": {
                                      "value": "Silicon Valley Hub"
                                    }
                                  },
                                  "img_desc": {
                                    "stringVal": {
                                      "value": "modern university campus architecture"
                                    }
                                  }
                                },
                                "editorId": "23214e21-d2c8-4e78-a6a4-41c40bc228b6"
                              },
                              {
                                "type": "@college_card",
                                "properties": {
                                  "name": {
                                    "stringVal": {
                                      "value": "Massachusetts Institute of Technology"
                                    }
                                  },
                                  "rank": {
                                    "stringVal": {
                                      "value": "2"
                                    }
                                  },
                                  "location": {
                                    "stringVal": {
                                      "value": "Cambridge, MA • USA"
                                    }
                                  },
                                  "fees": {
                                    "stringVal": {
                                      "value": "$58,500"
                                    }
                                  },
                                  "rating": {
                                    "stringVal": {
                                      "value": "4.9"
                                    }
                                  },
                                  "tag1": {
                                    "stringVal": {
                                      "value": "Innovation Leader"
                                    }
                                  },
                                  "tag2": {
                                    "stringVal": {
                                      "value": "Tech Pioneer"
                                    }
                                  },
                                  "img_desc": {
                                    "stringVal": {
                                      "value": "MIT dome building"
                                    }
                                  }
                                },
                                "editorId": "93973e05-8797-49dc-82cd-b9560ceceb77"
                              },
                              {
                                "type": "@college_card",
                                "properties": {
                                  "name": {
                                    "stringVal": {
                                      "value": "Indian Institute of Technology (IIT) Bombay"
                                    }
                                  },
                                  "rank": {
                                    "stringVal": {
                                      "value": "42"
                                    }
                                  },
                                  "location": {
                                    "stringVal": {
                                      "value": "Mumbai • India"
                                    }
                                  },
                                  "fees": {
                                    "stringVal": {
                                      "value": "$3,200"
                                    }
                                  },
                                  "rating": {
                                    "stringVal": {
                                      "value": "4.7"
                                    }
                                  },
                                  "tag1": {
                                    "stringVal": {
                                      "value": "Top Tier Engineering"
                                    }
                                  },
                                  "tag2": {
                                    "stringVal": {
                                      "value": "High ROI"
                                    }
                                  },
                                  "img_desc": {
                                    "stringVal": {
                                      "value": "modern indian university building"
                                    }
                                  }
                                },
                                "editorId": "04a880f9-5468-4712-8ad6-afd8a02de0ff"
                              },
                              {
                                "type": "@college_card",
                                "properties": {
                                  "name": {
                                    "stringVal": {
                                      "value": "Technical University of Munich"
                                    }
                                  },
                                  "rank": {
                                    "stringVal": {
                                      "value": "37"
                                    }
                                  },
                                  "location": {
                                    "stringVal": {
                                      "value": "Munich • Germany"
                                    }
                                  },
                                  "fees": {
                                    "stringVal": {
                                      "value": "$0 (Public)"
                                    }
                                  },
                                  "rating": {
                                    "stringVal": {
                                      "value": "4.6"
                                    }
                                  },
                                  "tag1": {
                                    "stringVal": {
                                      "value": "No Tuition"
                                    }
                                  },
                                  "tag2": {
                                    "stringVal": {
                                      "value": "AI Research Center"
                                    }
                                  },
                                  "img_desc": {
                                    "stringVal": {
                                      "value": "european university building"
                                    }
                                  }
                                },
                                "editorId": "c0d80918-29df-4455-b44b-2cc0f601b7df"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "align": {
                                    "align": {
                                      "named": "center"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "lg",
                                      "bottomToken": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "iconbutton",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "chevron_left_rounded"
                                        }
                                      },
                                      "border": {
                                        "border": {
                                          "width": 1,
                                          "color": "divider"
                                        }
                                      }
                                    },
                                    "editorId": "ae313392-657e-4c46-903f-2b37c9f23181"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "1"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "#FFFFFF"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          }
                                        },
                                        "editorId": "2fc25e36-04e9-476e-9827-1284b6914f2f"
                                      }
                                    ],
                                    "editorId": "a0106726-ba3b-48ef-91fd-ed4688ce767a"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "border": {
                                        "border": {
                                          "width": 1,
                                          "color": "divider"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "2"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          }
                                        },
                                        "editorId": "13890851-bb50-4462-a8e4-e7ae8db3924f"
                                      }
                                    ],
                                    "editorId": "7f5c7132-277e-4d96-af10-b402f0cebc74"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 40,
                                          "isInfinity": false
                                        }
                                      },
                                      "border": {
                                        "border": {
                                          "width": 1,
                                          "color": "divider"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "3"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          }
                                        },
                                        "editorId": "64e2ec46-0f87-4762-b32c-985ce492e42b"
                                      }
                                    ],
                                    "editorId": "1e4e6da8-9808-47ff-9a33-604414c415e5"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "..."
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "25deb116-76eb-4ca5-8bbc-028f713d2c71"
                                  },
                                  {
                                    "type": "iconbutton",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "chevron_right_rounded"
                                        }
                                      },
                                      "border": {
                                        "border": {
                                          "width": 1,
                                          "color": "divider"
                                        }
                                      }
                                    },
                                    "editorId": "3e9b1950-878c-4ddb-96c1-c5f71914370a"
                                  }
                                ],
                                "editorId": "7d7da843-eb86-4895-b0b8-5d3d74af069e"
                              }
                            ],
                            "editorId": "751b08b8-853f-4071-b161-993fbc37d622"
                          }
                        ],
                        "editorId": "c8623b40-ad12-4a64-8899-69db7c2a7a51"
                      }
                    ],
                    "editorId": "de0787c0-a808-48f3-8968-0db7541b3c85"
                  }
                ],
                "editorId": "6f079b14-d844-4e5c-ab40-6a5cda2b161d"
              }
            ],
            "editorId": "d4c2c67c-f0a3-47c4-aaed-0c541352dcb6"
          }
        ],
        "editorId": "cc51ab92-8421-4656-a4ba-3f4b218358c1"
      }
    ],
    "editorId": "009ac650-a619-4943-93d0-a911012de7f6"
  }
}
```

### 10. AI Career Chat

- Frame ID: `4a30f462-00fe-4505-9353-0a810787c3cf`
- Original page prompt: "A chat interface with suggested questions and an AI assistant for career guidance."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "background"
        }
      }
    },
    "children": [
      {
        "type": "row",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 260,
                  "isInfinity": false
                }
              },
              "bg": {
                "color": {
                  "color": "surface"
                }
              },
              "border": {
                "borderSided": {
                  "side": "right",
                  "width": 1,
                  "color": "divider"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "row",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "width": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "height": {
                            "px": {
                              "value": 40,
                              "isInfinity": false
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary"
                            }
                          },
                          "align_child": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "icon",
                            "properties": {
                              "name": {
                                "icon": {
                                  "name": "psychology_rounded"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 24
                                }
                              }
                            },
                            "editorId": "49cf3bff-d4a2-453e-bbb8-433f7fb53b8f"
                          }
                        ],
                        "editorId": "9560b5e1-0d18-4f75-915a-cbaaa760723e"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "LakshyAI"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "headline_medium"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          }
                        },
                        "editorId": "c4dd0b5d-bfe1-468e-ac90-daa51a76adec"
                      }
                    ],
                    "editorId": "624bad6c-c654-4a10-b10a-2408627d4802"
                  },
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "sm"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Dashboard"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "9bc92465-811a-40ed-b85c-c53b0d4fc6cf"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "route_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Roadmap"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "999b6b44-5a19-4f49-b32c-b5e791ea9a2d"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "school_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Colleges"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "32eae0d3-9bbc-4ba5-a91d-2302a9c3260a"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "chat_bubble_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "AI Mentor"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "0677211e-869d-40db-99d3-a19796df4907"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "settings_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Settings"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          },
                          "expanded": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "92370a05-4df4-4e8d-9261-011aa4aa3c4c"
                      }
                    ],
                    "editorId": "487d616d-ddbd-40a5-b799-e4865c5a3e8c"
                  },
                  {
                    "type": "spacer",
                    "editorId": "a973dba7-5671-47a8-87d9-dd6bce756ecd"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "bg": {
                        "color": {
                          "color": "background"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "avatar",
                            "properties": {
                              "text": {
                                "stringVal": {
                                  "value": "JD"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "accent"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "on_primary"
                                }
                              },
                              "size": {
                                "numberVal": {
                                  "value": 40
                                }
                              }
                            },
                            "editorId": "c9d38d16-46ad-44ca-b61d-6ef6f1e35240"
                          },
                          {
                            "type": "expanded",
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "John Doe"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_large"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "max_lines": {
                                        "numberVal": {
                                          "value": 1
                                        }
                                      },
                                      "overflow": {
                                        "stringVal": {
                                          "value": "ellipsis"
                                        }
                                      }
                                    },
                                    "editorId": "7ece7393-2be3-4d76-aade-0188547f14cf"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Student"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "8b3439fa-ac48-41ad-a41e-c41d0eff5f94"
                                  }
                                ],
                                "editorId": "7b1484dd-16ed-4361-833b-edea62a18417"
                              }
                            ],
                            "editorId": "b1790645-7ef8-404c-9941-fffbbaf8263a"
                          }
                        ],
                        "editorId": "df9c6fa0-2178-4c4d-8986-957518d15951"
                      }
                    ],
                    "editorId": "99cb498b-295a-467d-b472-7eb267e38caf"
                  }
                ],
                "editorId": "838e49e5-9cda-4d3d-b3b6-ef15d1053ae3"
              }
            ],
            "editorId": "21568228-2c32-47f7-ae9d-a9baecf49914"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "topToken": "lg",
                          "rightToken": "xl",
                          "bottomToken": "lg",
                          "leftToken": "xl"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "border": {
                        "borderSided": {
                          "side": "bottom",
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "AI Career Mentor"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "title_large"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "04147042-0139-4d06-9b03-fc831903e03f"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xs"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 8,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 8,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "full"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "success"
                                        }
                                      }
                                    },
                                    "editorId": "cb76c870-0ba1-412b-a399-48d9b59934f1"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "LakshyAI is online and ready to guide you"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "53c93f95-b974-4b7a-b44e-eda6839e9bda"
                                  }
                                ],
                                "editorId": "71488726-f461-4067-9eb7-bd7e6d395a4a"
                              }
                            ],
                            "editorId": "f20470b4-0052-4b54-8f2e-db756831f0ca"
                          },
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@std.button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Clear Chat"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "ghost"
                                    }
                                  },
                                  "icon": {
                                    "stringVal": {
                                      "value": "delete_outline_rounded"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "small"
                                    }
                                  }
                                },
                                "editorId": "8348f950-9955-4e6f-9c96-d3e67228876d"
                              },
                              {
                                "type": "@std.button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Export History"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "outline"
                                    }
                                  },
                                  "icon": {
                                    "stringVal": {
                                      "value": "download_rounded"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "small"
                                    }
                                  }
                                },
                                "editorId": "2119856a-5795-4470-a840-485622cc63c5"
                              }
                            ],
                            "editorId": "df2cd114-0849-4b90-bf90-dff46a2b768f"
                          }
                        ],
                        "editorId": "83ffc2c4-90d0-42c6-a5df-e0029eb4b92b"
                      }
                    ],
                    "editorId": "d69b1952-5280-4b59-9a16-cf7818863cd2"
                  },
                  {
                    "type": "expanded",
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "scroll": {
                            "boolVal": {
                              "value": true
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "xl"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@chat_bubble",
                            "properties": {
                              "is_ai": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "message": {
                                "stringVal": {
                                  "value": "Hello John! I've analyzed your interest in Coding and Design. Based on your current progress in the 'Foundation' roadmap, would you like to explore specialized roles like UI Engineer or Creative Technologist?"
                                }
                              },
                              "time": {
                                "stringVal": {
                                  "value": "10:02 AM"
                                }
                              }
                            },
                            "editorId": "0947d94c-b7e5-4ccf-bd0d-c6b05065ddcb"
                          },
                          {
                            "type": "@chat_bubble",
                            "properties": {
                              "is_ai": {
                                "boolVal": {
                                  "value": false
                                }
                              },
                              "message": {
                                "stringVal": {
                                  "value": "What exactly does a Creative Technologist do?"
                                }
                              },
                              "time": {
                                "stringVal": {
                                  "value": "10:05 AM"
                                }
                              }
                            },
                            "editorId": "42276b3c-207a-414a-bd21-d890d878d418"
                          },
                          {
                            "type": "@chat_bubble",
                            "properties": {
                              "is_ai": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "message": {
                                "stringVal": {
                                  "value": "A Creative Technologist sits at the intersection of design and engineering. They prototype experimental concepts using code. In the industry, they usually earn between $110k - $160k. \n\nWould you like to see a specific roadmap for this role?"
                                }
                              },
                              "time": {
                                "stringVal": {
                                  "value": "10:05 AM"
                                }
                              }
                            },
                            "editorId": "f54c1ecc-b601-4a81-8811-36ab35600be6"
                          },
                          {
                            "type": "container",
                            "properties": {
                              "margin": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "lg",
                                  "bottomToken": "lg"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "surface"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              },
                              "visible": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "progress",
                                    "properties": {
                                      "variant": {
                                        "stringVal": {
                                          "value": "circular"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 24
                                        }
                                      },
                                      "thickness": {
                                        "numberVal": {
                                          "value": 3
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      }
                                    },
                                    "editorId": "88cf0eba-3799-4fa4-bbc1-e0651e0a66d4"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "AI is analyzing career trends for Creative Technologists..."
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "322dcdb4-53f6-47b8-af4a-173604539cf6"
                                  }
                                ],
                                "editorId": "e39305f5-d5b5-4ab5-aa16-b358376c290b"
                              }
                            ],
                            "editorId": "afc1d5ff-8f81-4d05-a3b5-bc3352deb550"
                          }
                        ],
                        "editorId": "5593b5d1-f023-4845-9e7b-94494ccba109"
                      }
                    ],
                    "editorId": "c6f8994c-885d-4637-86c4-c15df311d44c"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "surface"
                        }
                      },
                      "border": {
                        "borderSided": {
                          "side": "top",
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Suggested for you"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "label_small"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "fa136361-aba4-4253-ae2d-bcdc48a31d3e"
                              },
                              {
                                "type": "wrap",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  },
                                  "run_spacing": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@suggested_question",
                                    "properties": {
                                      "text": {
                                        "stringVal": {
                                          "value": "Show me the roadmap for UI Engineering"
                                        }
                                      }
                                    },
                                    "editorId": "a390b3df-c5fd-4308-bf52-c92a9d491a67"
                                  },
                                  {
                                    "type": "@suggested_question",
                                    "properties": {
                                      "text": {
                                        "stringVal": {
                                          "value": "Compare salary with Full Stack Dev"
                                        }
                                      }
                                    },
                                    "editorId": "5cf58556-ccc0-4fe8-9e33-606b59d56aaa"
                                  },
                                  {
                                    "type": "@suggested_question",
                                    "properties": {
                                      "text": {
                                        "stringVal": {
                                          "value": "Top 5 colleges for Design & Tech"
                                        }
                                      }
                                    },
                                    "editorId": "ac56cecf-623b-405a-9b8e-2814cd227f67"
                                  },
                                  {
                                    "type": "@suggested_question",
                                    "properties": {
                                      "text": {
                                        "stringVal": {
                                          "value": "What skills should I learn next?"
                                        }
                                      }
                                    },
                                    "editorId": "dc36929d-23ce-4cab-836b-0a18fcbe8e6d"
                                  }
                                ],
                                "editorId": "97c08b1f-aecd-40e5-a191-2dc672fcb6f5"
                              }
                            ],
                            "editorId": "00458cd9-72d2-4164-b6ff-758907d45c3c"
                          },
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "background"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "sm",
                                  "rightToken": "md",
                                  "bottomToken": "sm",
                                  "leftToken": "md"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "divider"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "iconbutton",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "add_circle_outline_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "cf86b02d-a3a8-4e02-bd6f-5045c5b4ae0a"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "@std.textfield",
                                        "properties": {
                                          "variant": {
                                            "stringVal": {
                                              "value": "ghost"
                                            }
                                          },
                                          "hint": {
                                            "stringVal": {
                                              "value": "Ask anything about your career path..."
                                            }
                                          },
                                          "leading_icon": {
                                            "stringVal": {
                                              "value": "psychology_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "537361f9-d53a-474c-8f35-440ca7ce0743"
                                      }
                                    ],
                                    "editorId": "f7aa008f-18f5-4efa-be6f-34d48261b416"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "bg": {
                                        "color": {
                                          "color": "primary"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "topToken": "sm",
                                          "rightToken": "lg",
                                          "bottomToken": "sm",
                                          "leftToken": "lg"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Send"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "#FFFFFF"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_large"
                                                }
                                              },
                                              "font_weight": {
                                                "stringVal": {
                                                  "value": "bold"
                                                }
                                              }
                                            },
                                            "editorId": "a866b97f-0a06-4db2-8c33-5baf6b7093a4"
                                          },
                                          {
                                            "type": "icon",
                                            "properties": {
                                              "name": {
                                                "icon": {
                                                  "name": "send_rounded"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "#FFFFFF"
                                                }
                                              },
                                              "size": {
                                                "numberVal": {
                                                  "value": 18
                                                }
                                              }
                                            },
                                            "editorId": "4ff2816e-7be2-4464-b10a-fde1b55ced9a"
                                          }
                                        ],
                                        "editorId": "af4d4fd2-245e-47d7-9b23-7a1a766f27a0"
                                      }
                                    ],
                                    "editorId": "caf86701-de53-4f84-b157-b6a8335a15f5"
                                  }
                                ],
                                "editorId": "79ea9968-bb0f-47bd-8b32-ed71d100c889"
                              }
                            ],
                            "editorId": "c52acb6c-efa4-46a6-ab70-236e19ace6f7"
                          }
                        ],
                        "editorId": "2d718ad1-89a2-409d-97c5-4522317e0740"
                      }
                    ],
                    "editorId": "a491f586-0dde-4bcf-8071-c18653519c32"
                  }
                ],
                "editorId": "44bc813a-8c25-422d-8516-4cf90bc839b0"
              }
            ],
            "editorId": "0c052f68-2f7a-4b79-8f3a-9b600bf7c239"
          }
        ],
        "editorId": "e394a198-e297-48bb-aad0-5504af0d51ca"
      }
    ],
    "editorId": "f30921c4-8036-4637-9dbd-b2b24a3e96bc"
  }
}
```