Bridge.merge(new System.Globalization.CultureInfo("sq", true), {
    englishName: "Albanian",
    nativeName: "shqip",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "Lekë",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
        abbreviatedMonthGenitiveNames: ["jan","shk","mar","pri","maj","qer","kor","gsh","sht","tet","nën","dhj",""],
        abbreviatedMonthNames: ["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj",""],
        amDesignator: "e paradites",
        dateSeparator: ".",
        dayNames: ["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy h:mm:ss tt",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],
        monthNames: ["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor",""],
        pmDesignator: "e pasdites",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy",
        shortestDayNames: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1250,
        CultureName: "sq-AL",
        EBCDICCodePage: 20880,
        IsRightToLeft: false,
        LCID: 1052,
        listSeparator: ";",
        MacCodePage: 10029,
        OEMCodePage: 852,
        IsReadOnly: true
    })
});
