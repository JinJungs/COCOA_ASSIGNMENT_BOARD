(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
						"color" : nexacro.ColorObject("#222222")
					},
					"contents" :
					{
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
						"padding" : nexacro.PaddingObject("1px")
					},
					"disabled" :
					{
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VInc.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VIncM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VIncP.png\")")
							},
							"disabled" :
							{
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HInc.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HIncM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HIncP.png\")")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VDec.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VDecM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_VDecP.png\")")
							},
							"disabled" :
							{
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HDec.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HDecM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_HDecP.png\")")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"disabled" :
							{
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"disabled" :
							{
							}
						}
					},
					"vscrollbar" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"pushed" :
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none"),
						"padding" : nexacro.PaddingObject("1px")
					},
					"disabled" :
					{
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"wordWrap" : "char"
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#c1c1c1")
					}
				},
				"class" :
				[
					{
						"sta_WF_GTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b8bbc3"),
									"color" : nexacro.ColorObject("#30373b"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
									"letterSpacing" : nexacro.CSSValueObject("1px")
								}
							}
						}
					},
					{
						"sta_WF_GLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #ccd0d9"),
									"color" : nexacro.ColorObject("#30373b"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"letterSpacing" : nexacro.CSSValueObject("1px")
								}
							}
						}
					},
					{
						"sta_WF_GArea" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #ccd0d9")
								}
							}
						}
					},
					{
						"sta_WF_GStatus" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#746f6f"),
									"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_GLineV" :
						{
							"self" :
							{
								"enabled" :
								{
									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
								}
							}
						}
					},
					{
						"sta_WF_GLineH" :
						{
							"self" :
							{
								"enabled" :
								{
									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
								}
							}
						}
					},
					{
						"sta_WF_GTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ff000c"),
									"font" : nexacro.FontObject("11px \"Tahoma\"")
								}
							}
						}
					},
					{
						"sta_WF_GSize" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
								}
							}
						}
					},
					{
						"sta_WF_DetailLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DetailArea" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
								}
							}
						}
					},
					{
						"sta_WF_LabelTxt" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 13px/normal \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_FrmTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 16px \"Tahoma\"")
								}
							}
						}
					},
					{
						"sta_WF_DetailEssential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_Subtitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
								}
							}
						}
					},
					{
						"sta_WF_Summary" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("12px/17px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_SummaryBorder" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #eaeaea"),
									"padding" : nexacro.PaddingObject("2px"),
									"font" : nexacro.FontObject("12px/17px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_BorderNone" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
								}
							}
						}
					},
					{
						"sta_WF_BorderSolid" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #30373b"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
								}
							}
						}
					},
					{
						"sta_WF_BorderDotted" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px dotted #30373b"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
								}
							}
						}
					},
					{
						"sta_WF_BorderDashed" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px dashed #30373b"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
								}
							}
						}
					},
					{
						"sta_WF_PropertyName" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 13px/normal \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_PropertyValue" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_PropertyDetail" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#f44528"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_PropertyElement" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px dotted #c6cbce"),
									"color" : nexacro.ColorObject("#f16e59"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
								}
							}
						}
					},
					{
						"sta_WF_BorderOne" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid red")
								}
							}
						}
					},
					{
						"sta_WF_BorderTwo" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid red, 1px solid blue")
								}
							}
						}
					},
					{
						"sta_WF_BorderThree" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid red, 1px solid blue, 1px solid green")
								}
							}
						}
					},
					{
						"sta_WF_BorderFour" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid red, 1px solid blue, 1px solid green, 1px solid fuchsia")
								}
							}
						}
					},
					{
						"sta_WF_BorderExample" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #546687,1px solid #c6cbce,1px solid #c6cbce,1px solid #546687")
								}
							}
						}
					},
					{
						"sta_WF_EdgeSample" :
						{
							"self" :
							{
								"enabled" :
								{
									"edge" : nexacro.EdgeImageObject("url('theme://images/sta_WF_EdgeSampleImg.png') 5px 5px")
								}
							}
						}
					},
					{
						"sta_WF_PaddingAlignL" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"sta_WF_PaddingAlignR" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"sta_WF_PaddingSampleL" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_PaddingSampleR" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								}
							}
						}
					},
					{
						"sta_WF_AlignL" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_AlignC" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_AlignR" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DecoNone" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DecoLinethrough" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DecoOverline" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DecoUnderline" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_DecoDouble" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_VerticalT" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_VerticalM" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_VerticalB" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_WordwrapNone" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"wordWrap" : "none"
								}
							}
						}
					},
					{
						"sta_WF_WordwrapChar" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"wordWrap" : "char"
								}
							}
						}
					},
					{
						"sta_WF_WordwrapEnglish" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"wordWrap" : "english"
								}
							}
						}
					},
					{
						"sta_WF_BackImageurl" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c")
								}
							}
						}
					},
					{
						"sta_WF_BackGradient" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0182b1")
								}
							}
						}
					},
					{
						"sta_WF_BackImgNoOrigin" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("5px solid #cbcbcb")
								}
							}
						}
					},
					{
						"sta_WF_BackImgOriBbox" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("5px solid #cbcbcb")
								}
							}
						}
					},
					{
						"sta_WF_BackImgOriPbox" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("5px solid #cbcbcb")
								}
							}
						}
					},
					{
						"sta_WF_RadiusAllsame" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #bdc2c9")
								}
							}
						}
					},
					{
						"sta_WF_RadiusTrBl" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #bdc2c9")
								}
							}
						}
					},
					{
						"sta_WF_RadiusTrBlBr" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #bdc2c9")
								}
							}
						}
					},
					{
						"sta_WF_RadiusAlldifferent" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #bdc2c9")
								}
							}
						}
					},
					{
						"sta_WF_ColorName" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("peru")
								}
							}
						}
					},
					{
						"sta_WF_ColorHex" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#1f39b1"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_Font" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("15px \"verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_FontItalic" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("italic 15px \"verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_FontBold" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 15px \"Verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_FontItalicBold" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("italic bold 15px \"Verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_FontLineheight" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("italic bold 15px/20px \"Verdana\""),
									"border" : nexacro.BorderObject("1px dotted #9c9c9c")
								}
							}
						}
					},
					{
						"sta_WF_FontFontfamily" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("italic bold 15px/20px \"Verdana\",\"Arial\""),
									"border" : nexacro.BorderObject("1px dotted #9c9c9c")
								}
							}
						}
					},
					{
						"sta_WF_LetterspacingNor" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("15px \"verdana\"")
								}
							}
						}
					},
					{
						"sta_WF_Letterspacing5" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("15px \"verdana\""),
									"letterSpacing" : nexacro.CSSValueObject("5px")
								}
							}
						}
					},
					{
						"sta_WF_Letterspacing10" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("15px \"verdana\""),
									"letterSpacing" : nexacro.CSSValueObject("10px")
								}
							}
						}
					},
					{
						"sta_WF_Letterspacing_2" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("15px \"verdana\""),
									"letterSpacing" : nexacro.CSSValueObject("-2px")
								}
							}
						}
					},
					{
						"sta_WF_WordspacingNor" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_WF_Wordspacing15" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\""),
									"wordSpacing" : nexacro.CSSValueObject("15px")
								}
							}
						}
					}
				]
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
						"padding" : nexacro.PaddingObject("0px 8px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					}
				},
				"class" :
				[
					{
						"edi_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
						"padding" : nexacro.PaddingObject("0px 8px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#f44528")
					}
				},
				"class" :
				[
					{
						"msk_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
						"padding" : nexacro.PaddingObject("8px 8px 0px"),
						"wordWrap" : "char",
						"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\"")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					}
				},
				"class" :
				[
					{
						"txt_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
						"padding" : nexacro.PaddingObject("0px 5px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1")
					}
				},
				"class" :
				[
					{
						"btn_WF_RtlLogout" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
									"textPadding" : nexacro.PaddingObject("0px 15px"),
									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
									"textPadding" : nexacro.PaddingObject("0px 15px"),
									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
									"textPadding" : nexacro.PaddingObject("0px 15px"),
									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
									"textPadding" : nexacro.PaddingObject("0px 15px"),
									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')")
								}
							}
						}
					},
					{
						"btn_WF_Add" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #263a7d"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #263a7d"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #263a7d"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_Save" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #edada2"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Save.png')"),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#a1210b"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Save.png')"),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#a1210b"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveP.png')")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveP.png')"),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"btn_WF_Search" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SearchIcon.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SearchIcon.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SearchIcon.png\")")
								}
							}
						}
					},
					{
						"btn_WF_IconSample" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')")
								}
							}
						}
					},
					{
						"btn_WF_IconpositionL" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "left"
								}
							}
						}
					},
					{
						"btn_WF_IconpositionT" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "top"
								}
							}
						}
					},
					{
						"btn_WF_IconpositionR" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "right"
								}
							}
						}
					},
					{
						"btn_WF_IconpositionB" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "bottom"
								}
							}
						}
					},
					{
						"btn_WF_TxtpaddingNone" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "left"
								}
							}
						}
					},
					{
						"btn_WF_TxtpaddingLeft" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_IconSample.png')"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
								}
							}
						}
					},
					{
						"btn_TF_Mnu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f14231")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f14231")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #f14231")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #f14231")
								}
							}
						}
					},
					{
						"btn_LF_Mnu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b1b1b1"),
									"color" : nexacro.ColorObject("#8b8b8b"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #293943"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #293943"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #293943"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #293943"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
								}
							}
						}
					}
				]
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
						"textPadding" : nexacro.PaddingObject("0px 6px")
					},
					"disabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
						"color" : nexacro.ColorObject("#c1c1c1")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
					},
					"mouseover_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
					},
					"disabled_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxDS.png\")"),
						"color" : nexacro.ColorObject("#c1c1c1")
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#f44528")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					}
				},
				"class" :
				[
					{
						"spn_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 8px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"invalidtext" :
							{
								"color" : nexacro.ColorObject("#f44528")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnD.png\")")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnN.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnD.png\")")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					}
				},
				"class" :
				[
					{
						"cbo_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 8px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
																"color" : nexacro.ColorObject("#222222"),
																"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
									}
								}
							}
						}
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
									}
								}
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
															},
															"mouseover" :
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
															},
															"focused" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
									}
								}
							}
						}
					},
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
							}
						}
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("1px solid #9c9c9c")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c")
									}
								}
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("5px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#f44528")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c1c1c1")
									}
								}
							},
							"cellcombo" :
							{
								"parent" :
								{
									"cell" :
									{
										"parent" :
										{
											"row" :
											{
												"parent" :
												{
													"body" :
													{
														"parent" :
														{
															"Grid" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"padding" : nexacro.PaddingObject("5px")
																	},
																	"mouseover" :
																	{
																		"color" : nexacro.ColorObject("#f44528")
																	},
																	"selected" :
																	{
																		"color" : nexacro.ColorObject("#ffffff")
																	},
																	"disabled" :
																	{
																		"color" : nexacro.ColorObject("#c1c1c1")
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#f44528")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb")
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
								"textPadding" : nexacro.PaddingObject("0px 10px 0px 6px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemD.png\")"),
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemMS.png\")")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemDS.png\")"),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb")
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
								"color" : nexacro.ColorObject("#c1c1c1"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 20px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
							}
						},
						"class" :
						[
							{
								"mnu_TF_Mnu" :
								{
									"self" :
									{
										"enabled" :
										{
											"padding" : nexacro.PaddingObject("0px 10px"),
											"color" : nexacro.ColorObject("#ffffff"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
										},
										"mouseover" :
										{
											"color" : nexacro.ColorObject("#222222"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
										},
										"selected" :
										{
											"color" : nexacro.ColorObject("#ffffff"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
										}
									}
								}
							}
						]
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#f44528"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 3px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#f44528"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_Expand.png\")"),
										"padding" : nexacro.PaddingObject("0px")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_Expand.png\")"),
										"padding" : nexacro.PaddingObject("0px")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_ChkIcon.png\")"),
										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_ChkIcon.png\")"),
										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#444444"),
										"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#444444"),
										"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
									}
								}
							}
						}
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						},
						"class" :
						[
							{
								"pgb_WF_Image" :
								{
									"self" :
									{
										"disabled" :
										{
										}
									}
								}
							}
						]
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#222222"),
								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#222222"),
								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					},
					"cellprogressbar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"color" : nexacro.ColorObject("#787878"),
																"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#787878"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #293943")
					}
				},
				"class" :
				[
					{
						"grd_LF_MnuTree" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #cbcbcb"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #cbcbcb"),
												"padding" : nexacro.PaddingObject("2px")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											},
											"blinked" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										},
										"class" :
										[
											{
												"grd_LF_MnuTree" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #546169,0px none"),
															"color" : nexacro.ColorObject("#ffffff"),
															"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
														},
														"mouseover" :
														{
															"border" : nexacro.BorderObject("0px none,0px none,1px solid #768187"),
															"color" : nexacro.ColorObject("#b5bdc3")
														},
														"selected" :
														{
															"border" : nexacro.BorderObject("0px none,0px none,1px solid #f14231"),
															"color" : nexacro.ColorObject("#ffffff")
														}
													}
												}
											}
										]
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #cbcbcb , 0px none , 0px none"),
												"color" : nexacro.ColorObject("#ffffff"),
												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
											}
										}
									}
								}
							}
						}
					},
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							}
						}
					},
					"detail" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#222222"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				},
				"class" :
				[
					{
						"cell_WF_Noline" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"cell_WF_ExprW" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#3da2df"),
															"font" : nexacro.FontObject("bold italic 12px \"Malgun Gothic\"")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"cell_WF_ExprM" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#1b6e44"),
															"font" : nexacro.FontObject("bold italic 12px \"Malgun Gothic\"")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyCName" :
						{
							"parent" :
							{
								"body" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyCId" :
						{
							"parent" :
							{
								"body" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyCGender" :
						{
							"parent" :
							{
								"body" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyCLabel" :
						{
							"parent" :
							{
								"body" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyCValue" :
						{
							"parent" :
							{
								"body" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_DtailCLabel" :
						{
							"parent" :
							{
								"detail" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_DtailCValue" :
						{
							"parent" :
							{
								"detail" :
								{
									"parent" :
									{
										"ListView" :
										{
											"self" :
											{
												"enabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"disabled" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"focused" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												},
												"mouseover" :
												{
													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"cell_LF_Level1" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"class" :
													[
														{
															"grd_LF_MnuTree" :
															{
																"self" :
																{
																	"enabled" :
																	{
																		"color" : nexacro.ColorObject("#b5bdc3")
																	}
																}
															}
														}
													]
												}
											}
										}
									}
								}
							}
						}
					}
				]
			},
			"selection" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"Grid" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("2px solid #6f56f1")
									}
								}
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"class" :
						[
							{
								"cell_WF_UploadBtn" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"mouseover" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"pushed" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"disabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							},
							{
								"cell_WF_DnloadBtn" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"mouseover" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"pushed" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																},
																"disabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"color" : nexacro.ColorObject("#ffffff"),
																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						],
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"head" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cf270b"),
														"color" : nexacro.ColorObject("#ffffff"),
														"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #9a1a05")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #9a1a05")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #b4b4b4"),
														"color" : nexacro.ColorObject("#e8e8e8")
													}
												}
											}
										}
									},
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #c2c2c2"),
														"color" : nexacro.ColorObject("#555555"),
														"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #a0a0a0")
													},
													"pushed" :
													{
														"border" : nexacro.BorderObject("1px solid #c2c2c2")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #d9d9d9"),
														"color" : nexacro.ColorObject("#bbbbbb")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
								"color" : nexacro.ColorObject("#555555"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
								"color" : nexacro.ColorObject("#bbbbbb")
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"cell" :
					{
						"class" :
						[
							{
								"cell_WF_EdiEssential" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("1px solid #f44528"),
																	"padding" : nexacro.PaddingObject("0px 8px"),
																	"color" : nexacro.ColorObject("#222222"),
																	"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						],
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
														"padding" : nexacro.PaddingObject("0px 8px")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
														"color" : nexacro.ColorObject("#c1c1c1")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"cell" :
					{
						"class" :
						[
							{
								"cell_WF_RdoType" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoType.png')"),
																	"iconPosition" : "left",
																	"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
																	"color" : nexacro.ColorObject("#222222"),
																	"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
																},
																"disabled" :
																{
																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeD.png\")"),
																	"color" : nexacro.ColorObject("#c1c1c1")
																},
																"mouseover" :
																{
																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeM.png\")")
																},
																"selected" :
																{
																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeS.png\")")
																},
																"mouseover_selected" :
																{
																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeMS.png\")")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						],
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"head" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
														"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
													},
													"disabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
														"color" : nexacro.ColorObject("#c1c1c1")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
													},
													"selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
													},
													"mouseover_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
													},
													"disabled_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxDS.png\")"),
														"color" : nexacro.ColorObject("#c1c1c1")
													}
												}
											}
										}
									},
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
														"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
													},
													"disabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
														"color" : nexacro.ColorObject("#c1c1c1")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
													},
													"selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
													},
													"mouseover_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
													},
													"disabled_selected" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxDS.png\")"),
														"color" : nexacro.ColorObject("#c1c1c1")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cbcbcb")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb")
							}
						}
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
															},
															"disabled" :
															{
																"color" : nexacro.ColorObject("#c1c1c1")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c1c1c1")
									}
								}
							}
						}
					},
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"invalidtext" :
							{
								"color" : nexacro.ColorObject("#f44528")
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
															},
															"disabled" :
															{
																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
									}
								}
							}
						}
					},
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUp.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpM.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpD.png\")")
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"cellcalendar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
															},
															"pushed" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
															},
															"disabled" :
															{
																"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
									}
								}
							}
						}
					},
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDn.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnM.png\")")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnD.png\")")
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
														"padding" : nexacro.PaddingObject("0px 8px")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
														"color" : nexacro.ColorObject("#c1c1c1")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
								"padding" : nexacro.PaddingObject("0px 8px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
														"padding" : nexacro.PaddingObject("3px"),
														"color" : nexacro.ColorObject("#222222"),
														"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\""),
														"wordWrap" : "char"
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
														"color" : nexacro.ColorObject("#c1c1c1")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
								"padding" : nexacro.PaddingObject("3px"),
								"color" : nexacro.ColorObject("#222222"),
								"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\""),
								"wordWrap" : "char"
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
								"color" : nexacro.ColorObject("#c1c1c1")
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtn.png\")")
													},
													"mouseover" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
													},
													"focused" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
													},
													"pushed" :
													{
														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
													},
													"disabled" :
													{
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtn.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"cellprogressbar" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
														"padding" : nexacro.PaddingObject("1px 0px")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
								"padding" : nexacro.PaddingObject("1px 0px")
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"expand" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeExpBtn.png\")")
															},
															"collapse" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCollBtn.png\")")
															}
														},
														"class" :
														[
															{
																"grd_LF_MnuTree" :
																{
																	"self" :
																	{
																		"expand" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeExpBtn.png\")")
																		},
																		"collapse" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_TreeCollBtn.png\")")
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"collapse" :
															{
																"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
															},
															"expand" :
															{
																"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
															},
															"leaf" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeLeafImg.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemcheckbox" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
																"textPadding" : nexacro.PaddingObject("0px 6px")
															},
															"disabled" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
																"color" : nexacro.ColorObject("#c1c1c1")
															},
															"mouseover" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
															},
															"selected" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
															},
															"mouseover_selected" :
															{
																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #9c9c9c")
													},
													"mouseover" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"focused" :
													{
														"border" : nexacro.BorderObject("1px solid #f44528")
													},
													"disabled" :
													{
														"border" : nexacro.BorderObject("1px solid #cbcbcb")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb")
							}
						}
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1")
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"selected" :
							{
							}
						}
					}
				},
				"class" :
				[
					{
						"lstv_WF_BdyFormat1" :
						{
							"parent" :
							{
								"ListView" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
										},
										"focused" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
										},
										"mouseover" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
										},
										"readonly" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
										},
										"disabled" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
										},
										"selected" :
										{
										}
									}
								}
							}
						}
					},
					{
						"lstv_WF_BdyFormat2" :
						{
							"parent" :
							{
								"ListView" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff")
										},
										"focused" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff")
										},
										"mouseover" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff")
										},
										"readonly" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff")
										},
										"disabled" :
										{
											"border" : nexacro.BorderObject("1px solid #ffffff")
										},
										"selected" :
										{
										}
									}
								}
							}
						}
					}
				]
			},
			"expandbar" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarExpicon.png')")
									}
								}
							}
						}
					}
				}
			},
			"detail" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
							},
							"selected" :
							{
							}
						}
					}
				}
			},
			"vscrollbar" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #9b9c9c"),
								"padding" : nexacro.PaddingObject("3px 1px")
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528 , 1px solid #9c9c9c , 1px solid #9c9c9c")
							}
						}
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
								"font" : nexacro.FontObject("normal 12px \"Malgun Gothic\""),
								"padding" : nexacro.PaddingObject("5px 10px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
								"color" : nexacro.ColorObject("#f44528")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528"),
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cbcbcb , 1px solid #cbcbcb , 1px solid #f44528,1px solid #cbcbcb"),
								"color" : nexacro.ColorObject("#c1c1c1")
							},
							"focused_selected" :
							{
								"border" : nexacro.BorderObject("1px solid #f44528"),
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					}
				},
				"class" :
				[
					{
						"tab_WF_BtnItem" :
						{
							"parent" :
							{
								"Tab" :
								{
									"self" :
									{
										"enabled" :
										{
											"border" : nexacro.BorderObject("1px solid #555a5e"),
											"padding" : nexacro.PaddingObject("3px 5px"),
											"color" : nexacro.ColorObject("#ffffff"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
										},
										"mouseover" :
										{
											"color" : nexacro.ColorObject("#555a5e")
										},
										"selected" :
										{
											"border" : nexacro.BorderObject("1px solid #055a70")
										},
										"disabled" :
										{
										},
										"focused_selected" :
										{
											"border" : nexacro.BorderObject("1px solid #055a70")
										}
									}
								}
							}
						}
					}
				]
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
									}
								}
							}
						}
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtn.png\")"),
								"padding" : nexacro.PaddingObject("2px 3px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnM.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #666666"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnD.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtn.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnD.png\")")
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
								"padding" : nexacro.PaddingObject("2px 3px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnM.png\")")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #666666"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnD.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnD.png\")")
									}
								}
							}
						}
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f44528")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #555555"),
						"color" : nexacro.ColorObject("#222222")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#f44528")
					}
				},
				"class" :
				[
					{
						"cal_WF_TypeMonth" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"cal_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					}
				}
			},
			"yearstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				}
			},
			"monthstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#30373b")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#252abf")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff5a00")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
									},
									"mouseover" :
									{
									},
									"today" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#252abf")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff5a00")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#c2c4c6")
									}
								}
							}
						}
					}
				}
			},
			"FileUpload" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
										"padding" : nexacro.PaddingObject("8px 0px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #cf270b")
									},
									"pushed" :
									{
										"border" : nexacro.BorderObject("1px solid #cf270b")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
										"color" : nexacro.ColorObject("#c1c1c1")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #9c9c9c")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
										"color" : nexacro.ColorObject("#c1c1c1"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				}
			},
			"FileDownload" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #cf270b")
					},
					"pushed" :
					{
						"border" : nexacro.BorderObject("1px solid #cf270b")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
						"color" : nexacro.ColorObject("#c1c1c1"),
						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 5px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemMS.png\")")
							}
						}
					}
				}
			},
			"Div" :
			{
				"class" :
				[
					{
						"div_WF_SearchArea" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c7c7c7")
								}
							}
						}
					}
				]
			},
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #1c2124")
					},
					"deactivate" :
					{
						"border" : nexacro.BorderObject("1px solid #5a677f")
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#ffffff"),
						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
						"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_Close.png\")")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_Max.png\")")
							}
						}
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_Min.png\")"),
								"padding" : nexacro.PaddingObject("8px 0px 0px")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("url(\"theme://images/btn_TF_Normal.png\")")
							}
						}
					}
				}
			},
			"StatusBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #9c9c9c,0px none,0px none"),
						"color" : nexacro.ColorObject("#30373b"),
						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
						"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
								"padding" : nexacro.PaddingObject("2px 0px")
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true,
			"hasListViewExpandStatus" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VInc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VIncM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VIncP.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VDec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VDecM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VDecP.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HInc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HIncM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HIncP.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HDec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HDecM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HDecP.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropP.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Expand.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_Image.png")] = { width:12, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_ImageD.png")] = { width:12, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_UploadBtn.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_DnloadBtn.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoType.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeD.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeMS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_Drop.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropP.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropD.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtn.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtnP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeLeafImg.png")] = { width:9, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnM.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnD.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtn.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnM.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnP.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnD.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtn.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LtrLogout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RtlLogout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_LabelEssential.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubtitleIcon.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:2, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveP.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchIcon.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_EdgeExplain.png")] = { width:279, height:157 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_EdgeSampleImg.png")] = { width:15, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_IconSample.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_CursorImg.png")] = { width:466, height:162 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Main.png")] = { width:822, height:593 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroLogo.png")] = { width:112, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_AllMnu.png")] = { width:17, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpBtn.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollBtn.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_AllX.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Horz.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Max.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Min.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Verti.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxD.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinD.png")] = { width:11, height:2 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalD.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Edge.png")] = { width:100, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_Structure.png")] = { width:491, height:189 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellDelete.png")] = { width:33, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellNew.png")] = { width:33, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSave.png")] = { width:33, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSearch.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgAvata.png")] = { width:98, height:145 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgFrozen.png")] = { width:98, height:145 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgInception.png")] = { width:98, height:145 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgIronman.png")] = { width:98, height:140 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgStarwars.png")] = { width:96, height:145 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgTitanic.png")] = { width:98, height:140 };
		imgcache[nexacro._getImageLocation("theme://images/img_SB_Grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_RepeatX.png")] = { width:2, height:48 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_SampleNexacro.png")] = { width:126, height:125 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp10.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp11.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp12.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp13.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp14.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp15.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp16.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp17.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp18.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp19.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp20.png")] = { width:128, height:128 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprM.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprW.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_DataIconCut.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_DatasIconPaste.png")] = { width:14, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtn.png")] = { width:7, height:7 };
	};
}
)();
